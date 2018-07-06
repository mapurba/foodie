var mongoose = require('mongoose');
var passport = require('passport');

var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const authService = require('../Services/AuthService');
const User = mongoose.model('User');

let restaurant=require("./restaurant");




router.get('/users/details', authService.checkTokenMW,(req,res)=> {
        User.find({},(err, data)=>{
            res.send(data);


        })
//res.send("hello world");


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

router.use("/restaurant",restaurant);

module.exports = router;
