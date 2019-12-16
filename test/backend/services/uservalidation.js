const validator = require('../helpers/validator');
module.exports = {
    ValidateUser:  function (user,callback) {
     //user validation  
     if(validator.Username(user.firstname)){ 
     
      if(validator.Username(user.lastname)){
        
        if(validator.Email(user.email)){
          
          if(validator.AADHAR(user.aadharNo)){

            if(validator.Password(user.password)){
             
              if(validator.PAN(user.panNo)){

                if(validator.DATE(user.dob)){
                 
                  if(validator.Username(user.nfirstname)){
                   
                    if(validator.Username(user.nlastname)){
                      
                      if(validator.DATE(user.ndob)){
                        
                        callback(true)
                       
                      }else{
                        callback(false,"invalid ndob")
                      }
                    }else{
                      callback(false,"invalid nlastname")
                    }
                  }else{
                    callback(false,"invalid nfirstname")
                  }
                }
                else{
                  callback(false,"invalid dob")
                }
              }else{
                callback(false,"invalid pan")
              }
            }else{
              callback(false,"invalid password")
            }
          }else{
            callback(false,"invalid aadhar")
          }
        }else{
          callback(false,"invalid email")
        }
      }else{
        callback(false,"invalid lastname")
      }
    }else{
      callback(false,"invalid firstname")
    }
   
  }
  
  
}
 