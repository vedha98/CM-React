const Sequelize = require('sequelize');
const db = require("../config/database");
const projects = db.define('projects',
{
   
userid:{
    type:Sequelize.INTEGER
},
desc:{
    type:Sequelize.STRING
},
title:{
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
module.exports = projects;