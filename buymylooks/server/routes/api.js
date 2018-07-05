var mongoose = require('mongoose');
var passport = require('passport');
//var config = require('../config/database');
//require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const authService = require('../Services/AuthService');
const User = mongoose.model('User');






// route to check token with postman.
// using middleware to check for authorization header
router.get('/verify', authService.checkTokenMW) /*(req, res) => {
//     authService.verifyToken(req, res);
// if (null === req.authData) {
//     res.sendStatus(403);
// } else {
//     res.json(req.authData);
// }
}*/


// List all the Users
router.get('/users/list', authService.checkTokenMW, (req, res) => {
    // authService.verifyToken(req, res);
    if (null === req.authData) {
    // res.sendStatus(403);
} else {
    User.find({}, function(err, users) {
        if (err) throw err;

        // object of all the users
        // console.log(users);
        res.json(users);

    });
}
});
module.exports = router;
