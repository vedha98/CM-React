const uservalidation = require('../services/uservalidation');
const userregdb = require('../services/database/db_uregistration')
const verify = require('../services/verification')
module.exports = {
   ValidateAndCreateUser: async function (user,callback) {
    uservalidation.ValidateUser(user,(val,msg)=>{
      if(val){
        userregdb.checkExist(user).then(exist=>{
          if(exist){
            userregdb.createUser(user,val=>{
              if(val){
                callback(true,"usercreated")  
              }else{
                callback(false,"user creation failed")  
              }
              
            })
          }else{
            callback(false,"user already exists")  
          }
          
        })
        
      }else{
        callback(false,msg)
      }
    })
   
      
  },
  CheckPasswordAcc(data,callback){
    userregdb.findUserbyAccNo(data,(user,msg)=>{
      if(user){
        userregdb.CheckPassword(user,data.password,(res)=>{
          if(res){
            if(user.everified===true){
              callback(true,"user logged in")
            }else{   
              verify.sendVerifyMail(user)
              callback(false,"please verify your email")
            }
          }else{
            callback(false,"wrong password")
          }
        })
      }else{
        callback(false,msg)
      }
     

    })
  }
};