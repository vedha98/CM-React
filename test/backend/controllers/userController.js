const uservalidation = require('../services/uservalidation');
const userregdb = require('../services/database/db_uregistration')
module.exports = {
   ValidateAndCreateUser: async function (user,callback) {
    if(uservalidation.ValidateName(user.firstname)){ 
     
      if(uservalidation.ValidateName(user.lastname)){
        
        if(uservalidation.ValidateEmail(user.email)){
          
          if(uservalidation.ValidateAADHAR(user.aadharNo)){

            if(uservalidation.ValidatePassword(user.password)){
             
              if(uservalidation.ValidatePan(user.panNo)){

                if(uservalidation.ValidateDate(user.dob)){
                 
                  if(uservalidation.ValidateName(user.nfirstname)){
                   
                    if(uservalidation.ValidateName(user.nlastname)){
                      
                      if(uservalidation.ValidateDate(user.ndob)){
                        userregdb.createUser(user)
                        callback("hello")

                      }
                    }
                  }
                }
                else{
                  callback("invalid dob")
                }
              }else{
                callback("invalid pan")
              }
            }else{
              callback("invalid password")
            }
          }
        }
      }
    }
   
      
  }
};