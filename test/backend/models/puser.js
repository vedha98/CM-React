'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = db.define('users',
  {
  id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      autoIncrement:true
  }, 
  firstname:{
      type:Sequelize.STRING,
      allowNull:false
  },
  lastname:{
      type:Sequelize.STRING,
      allowNull:false
  },
  email:{
      type:Sequelize.STRING,
      allowNull:false
  },
  aadharNo:{
      type:Sequelize.STRING,
      allowNull:false
  },
  password:{
      type:Sequelize.STRING,
      allowNull:false
  },
  panNo:{
      type:Sequelize.STRING,
      allowNull:false
  },
  everified:{
      type:Sequelize.STRING,
      allowNull:false
  },
  pverified:{
      type:Sequelize.STRING,
      allowNull:false
  },
  averified:{
      type:Sequelize.STRING,
      allowNull:false
  },
  balance:{
      type:Sequelize.INTEGER,
      allowNull:false
  },
  refferal:{
      type:Sequelize.STRING,
      allowNull:false
  },
  refferedcode:{
      type:Sequelize.STRING
  },
  dob:{
      type:Sequelize.DATE,
      allowNull:false
  },
  nfirstname:{
      type:Sequelize.STRING,
      allowNull:false
  },
  nlastname:{
      type:Sequelize.STRING,
      allowNull:false
  },
  ndob:{
      type:Sequelize.STRING,
      allowNull:false
      
  },
  accno:{
      type:Sequelize.STRING,
      allowNull:false
  },
  createdAt:{
      type:Sequelize.DATE
  },
  updatedAt:{
      type:Sequelize.DATE
  },
  deletedAt:{
    type:Sequelize.DATE
  },
  tokenlogin:{
      type:Sequelize.BOOLEAN
  },
  }, { sequelize,
    modelName: 'user'});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};