var mongoose = require('mongoose');
var passport = require('passport');
//var config = require('../config/database');
//require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const authService = require('../Services/AuthService');
const User = mongoose.model('User');









// List all the Users
router.get('/users/list', authService.checkTokenMW,(req,res)=> {
    res.send("hello world");

}
);
module.exports = router;
