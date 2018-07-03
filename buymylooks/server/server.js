let express = require("express");
let app = express();
let api = require("instagram-node").instagram();
let port = process.env.PORT || 5000;

// let mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/buymylooks");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Max-Age", "3600");

  next();
});

api.use({
  client_id: `2a0c72d869bc4f3196b7efe4e1b3114f`,
  client_secret: `411f784a17c145428998f5d82354ef96`
});

// let redirect_uri = 'https://manasvi2001.github.io/buymylooks/build';
let redirect_uri = 'http://localhost:3000/#/login';


exports.authorize_user = (req, res) => {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
};

exports.handleauth = (req, res) => {
  api.authorize_user(req.query.code, redirect_uri, (err, result) => {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send(JSON.stringify(result));
    }
  });
};

// This is where you would initially send users to authorize
app.get('/authorize_user', exports.authorize_user);
// This is your redirect URI
app.get('/handleauth', exports.handleauth);

app.get("/", (req, res) => {
	res.send("Hello World!");
})

app.listen(port, () => {
	console.log(`App running on port :: ${port}`);
}); 
