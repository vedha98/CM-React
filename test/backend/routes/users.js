const { checkToken } = require("../services/checkToken");

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const config = require('../config/jwttoken')
const jwt = require('jsonwebtoken');




//get all users
router.get('/',(req,res)=>{
  
  
})
router.post('/register',(req,res)=>{
   
    const userdata = req.body;
    userController.ValidateAndCreateUser(userdata,(val,msg)=>{
        if(val){
            res.json({"success":true,"msg":msg})
        }
        else{
            res.json({"success":false,"msg":msg})
        }
        
    })
})
router.post('/login',(req,res)=>{
    const userdata = req.body;
    if(userdata.id){
        if(userdata.password){
            userController.CheckPasswordAcc(userdata,(val,msg)=>{
                let token="" 
                if(val){token = jwt.sign({id:userdata.id}, config.secret, {
                    expiresIn: 604800 
                  })}
                res.json({token:token,success:val,msg:msg})
            })
        }else{
            res.json({success:false,msg:"no password"})
        }
    }else{
        res.json({success:false,msg:"no Customer ID"})
    }
})
router.get('/validate/:key',(req,res)=>{
    userController.ValidateEKey(req.params.key,val=>{
        if(val){
            userController.EVerifyUser(val.userId).then(val=>{res.json({success:"true",msg:"user verified successfully"})})
        }else{
            res.json({msg:"wrong key"})
        }
    })

})
router.get('/otpverify/:key',(req,res)=>{
    userController.ValidateOTP(req.params.key,val=>{
        if(val){
            userController.PVerifyUser(val.userId).then(val=>{res.json({success:"true",msg:"user verified successfully"})})
        }else{
            res.json({msg:"wrong otp"})
        }
    })

})
router.get('/tokenlogin',checkToken,(req,res)=>{
    res.json({user:req.user,success:true,msg:"logged in successfully"})
})

router.post('/image',(req,res)=>{
    console.log(req)
})

module.exports = router