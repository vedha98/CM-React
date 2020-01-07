const { checkToken } = require("../services/checkToken");

const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');

router.post('/sendmoney',(req,res)=>{
transferController.transfermoney(req.body).then(({success,msg})=>{
    res.json({success,msg})
})
})
router.get('/gettransactions',checkToken,(req,res)=>{
    transferController.getAllTransactions(req.user).then(val=>{
        res.json({val})
    })
})
module.exports = router;