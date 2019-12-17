const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

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
                res.json({success:val,msg})
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
module.exports = router