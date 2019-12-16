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
    const userdata = res.body;
    res.json(userdata)
})
module.exports = router