const express = require('express');
const app = express();
require('./Model/User/User');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const authService = require('./Services/AuthService');
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const User = mongoose.model('User');


// MONGODB CONNECTION. mongodb ATLAS

const mongoOptions = {
    server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
    replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}}
};
const mongodbUri = keys.mongo.mongodbUri;
mongoose.Promise = require('bluebird');
mongoose.connect(mongodbUri, mongoOptions);
const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

app.use(function (req, res, next) {
    let allowedOrigins = ['*'];  // list of url-s
    let origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Expose-Headers', 'Content-Disposition');
    next();
});

app.use(passport.initialize());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/'));
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});


// ############# GOOGLE AUTHENTICATION ################
// this will call passport-setup.js authentication in the config directory
app.get('/auth/google', passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email']
}));

// callback url upon successful google authentication
app.get('/auth-success', passport.authenticate('google', {session: false}), (req, res) => {
    authService.signToken(req, res);
});

// route to check token with postman.
// using middleware to check for authorization header
app.get('/verify', authService.checkTokenMW, (req, res) => {
    authService.verifyToken(req, res);
    if (null === req.authData) {
        res.sendStatus(403);
    } else {
        res.json(req.authData);
    }
});

// List all the Users
app.get('/api/users/list', authService.checkTokenMW, (req, res) => {
    // authService.verifyToken(req, res);
    // if (null === req.authData) {
    //     res.sendStatus(403);
    // } else {
        User.find({}, function(err, users) {
            if (err) throw err;
            // object of all the users
            // console.log(users);
            res.json(users);

        });
    // }
});



// start server after mongodb connection is verified.
conn.once('open', function () {
    // Wait for the database connection to establish, then start the app.
    app.listen(8081, function () {
        console.log('Express app listening on port 8081!');
    });
});

