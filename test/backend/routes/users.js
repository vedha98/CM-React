const express = require('express');
const router = express.Router();

const user = require('../models/user');
const projects = require('../models/projects');
router.get('/',(req,res)=>{
    let data ={} 
    user.findAll().then(users=>{
     res.json({users:users})
    })
})

router.put('/',(req,res)=>{
let {name,desc,salary} = req.body;
user.create({name,desc,salary}).then( res.json({msg:"success"})   );
})
router.post('/',(req,res)=>{
let {id,salary} = req.body;

user.update({salary},{where:{id}}).then(res.json({msg:"success"}))

})
router.delete('/',(req,res)=>{
    let{id}=req.body;
    user.destroy({where:{id}}).then(res.json({msg:'deleted successfully'}))
})
router.post('/createProject',(req,res)=>{
    let {userid,desc,title}=req.body;
    projects.create({userid,desc,title}).then(res.json({msg:"success"}));
})
router.get('/userProjects',(req,res)=>{
let{userid}=req.body;
projects.findAll({where:{userid}}).then(projects=>{
    res.json({projects});
}).catch(err=>{throw err})

})
module.exports = router