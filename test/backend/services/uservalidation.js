const validator = require('../helpers/validator');
module.exports = {
    ValidateName:  function (name) {
     //user validation
     
   return validator.Username(name)
  },
  ValidateEmail: function(email){
    return validator.Email(email)
  },
  ValidateAADHAR: function(aad){
    return validator.AADHAR(aad);
  },
  ValidatePassword: function(pass){
    return validator.Password(pass);
  },
  ValidatePan: function(pan){
    return validator.PAN(pan);
  },
  ValidateDate: function(date){
    return validator.DATE(date)
  }
}
 