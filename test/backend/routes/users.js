const express = require('express');
const router = express.Router();
const user = require('../models/user');

//get all users
router.get('/',(req,res)=>{
  
    user.findAll().then(users=>{
     res.json({users:users})
    })
})
router.post('/register',(req,res)=>{
    console.log("/reg");
})
module.exports = router