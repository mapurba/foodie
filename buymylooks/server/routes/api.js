var mongoose = require('mongoose');
var passport = require('passport');
//var config = require('../config/database');
//require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const authService = require('../Services/AuthService');
const User = mongoose.model('User');






router.get('/users/details', authService.checkTokenMW,(req,res)=> {
    console.log(req.authData);
res.send("hello world");


}
);


// List all the Users
router.get('/users/list', authService.checkTokenMW,(req,res)=> {
    console.log(req.authData.email);
    User.find({},(err, data)=>{
        res.send(data);

})
    //res.send("hello world");


}
);
module.exports = router;
