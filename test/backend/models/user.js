const Sequelize = require('sequelize');
const db = require("../config/database");
const user = db.define('data',
{
    
name:{
    type:Sequelize.STRING
},
desc:{
    type:Sequelize.STRING
},
salary:{
    type:Sequelize.STRING
},
createdAt:{
    type:Sequelize.DATE
},
updatedAt:{
    type:Sequelize.DATE
}
}
)
module.exports = user;