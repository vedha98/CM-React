const validator = require('../helpers/validator');
module.exports = {
    ValidateName:  function (name,callback) {
     //user validation
     
     callback(validator.Username(name))
  }
}
 