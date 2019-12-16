const uservalidation = require('../services/uservalidation');
module.exports = {
   ValidateAndCreateUser:  function (user,callback) {
    uservalidation.ValidateName(user.firstname,(val)=>{
     
      callback(val)
    })
  }
};