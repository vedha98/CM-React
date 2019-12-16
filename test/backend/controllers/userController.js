const uservalidation = require('../services/uservalidation');
const userregdb = require('../services/database/db_uregistration')
module.exports = {
   ValidateAndCreateUser: async function (user,callback) {
    uservalidation.ValidateUser(user,(val,msg)=>{
      if(val){
        userregdb.createUser(user,val=>{
          if(val){
            callback(true,"usercreated")  
          }else{
            callback(false,"user creation failed")  
          }
          
        })
      }else{
        callback(false,msg)
      }
    })
   
      
  }
};