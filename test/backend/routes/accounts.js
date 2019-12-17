const { checkToken } = require("../services/checkToken");

const express = require('express');
const router = express.Router();
router.post('/createacc',checkToken,(req,res)=>{
    res.json(req.user);
})

module.exports = router