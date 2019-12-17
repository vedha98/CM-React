const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const config = require('../config/jwttoken')
const jwt = require('jsonwebtoken');



const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
       
        res.sendStatus(403)
    }
}


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
                const token = jwt.sign({id:userdata.id}, config.secret, {
                    expiresIn: 604800 
                  });
                res.json({token:token,user:val,msg:msg})
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
userController.checkToken(req.token).then(val=>{
    if(!val){res.json({success:false,msg:"invalid token"})}else{
        userController.getUserById(val.id,(user)=>{
            res.json({user,success:true,msg:"Login Successfull"})
        })

    }
})
})



module.exports = router