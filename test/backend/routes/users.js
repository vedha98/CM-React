const express = require('express');
const router = express.Router();
const user = require('../models/user');
const userController = require('../controllers/userController');

//get all users
router.get('/',(req,res)=>{
  
    user.findAll().then(users=>{
     res.json({users:users})
    })
})
router.post('/register',(req,res)=>{
   
    const userdata = req.body;
    userController.ValidateAndCreateUser(userdata,(val)=>{
        console.log(val)
        res.json({"msg":val})
    })
})
module.exports = router