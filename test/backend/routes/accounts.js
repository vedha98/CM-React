const { checkToken } = require("../services/checkToken");
const accountController = require("../controllers/accountController")
const express = require('express');
const router = express.Router();
router.post('/createacc',checkToken,(req,res)=>{
    accountController.ValidateAndCreateAccount(req.user,req.body).then(val=>{
        
    })
})

module.exports = router