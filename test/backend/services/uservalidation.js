const validator = require('../helpers/validator');
module.exports = {
    ValidateName: async function (name) {
     //user validation
     validator.Username(name).then(val=>{
        if(val) {
            return true
        }
     })
  
     
   }
 };