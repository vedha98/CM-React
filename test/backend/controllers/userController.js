const uservalidation = require('../services/uservalidation');
module.exports = {
   ValidateAndCreateUser: async function (user,ret) {
    uservalidation.ValidateName(user.firstname).then(val=>{
     
    })
  }
};