var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//require('./Model/User/Restaurant');
const authService = require('../Services/AuthService');
const restaurantSchema = mongoose.model('restaurantSchema');



router.get('/list', authService.checkTokenMW,(req,res)=> {
    restaurantSchema.find({},(err, data)=>{
     res.send(data);


    })
});

router.put('/edit', authService.checkTokenMW,(req,res) => {
    //console.log(req.body);
    let body = JSON.parse(Object.keys(req.body)[0]);
    let name = body.name;
    let email = body.email;
    let updateName = body.updateName;
    //console.log(req.authData.email);

    // restaurantSchema.findOneAndUpdate({ email: req.authData.email },{name: updateName}, (err, data,next) =>{
    //     if(err) {
    //         res.send("error occured");
    //     }
    //     else{
    //         restaurantSchema.save;
    //         //res.json(data);
    //
    //     },() =>{
    //
    //     }
    // });


    // restaurantSchema.find({email: req.authData.email},(err, ress) =>{
    //     if(err){
    //         res.send('Error occured');
    //     }
    //     else{
    //
    //         let ret = JSON.parse(Object.keys(ress)[0]);
    //         let name = ret.name;
    //         console.log(name);
    //         restaurantSchema.update({name: name},{name: updateName},(err, resss) =>{
    //             if(err){
    //                 res.send("Failed to update");
    //             }
    //             else{
    //
    //                     console.log(resss);
    //                     restaurantSchema.save;
    //                     res.json(resss);
    //
    //
    //             }
    //
    //
    //         });
    //
    //     }
    //     //console.log(ress);
    // });


});





module.exports = router;


