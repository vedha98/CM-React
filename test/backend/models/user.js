'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users',
  {
  id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
  }, 
  firstname:{
      type:DataTypes.STRING,
      allowNull:false
  },
  lastname:{
      type:DataTypes.STRING,
      allowNull:false
  },
  email:{
      type:DataTypes.STRING,
      allowNull:false
  },
  aadharNo:{
      type:DataTypes.STRING,
      allowNull:false
  },
  password:{
      type:DataTypes.STRING,
      allowNull:false
  },
  panNo:{
      type:DataTypes.STRING,
      allowNull:false
  },
  phone:{
    type:DataTypes.STRING,
    allowNull:false
},
  everified:{
      type:DataTypes.BOOLEAN,
      allowNull:false
  },
  pverified:{
      type:DataTypes.BOOLEAN,
      allowNull:false
  },
  averified:{
      type:DataTypes.BOOLEAN,
      allowNull:false
  },
  refferal:{
      type:DataTypes.STRING,
      allowNull:false
  },
  refferedcode:{
      type:DataTypes.STRING
  },
  everifycode:{
    type:DataTypes.STRING,
    allowNull:false
},
  dob:{
      type:DataTypes.DATE,
      allowNull:false
  },
  nfirstname:{
      type:DataTypes.STRING,
      allowNull:false
  },
  nlastname:{
      type:DataTypes.STRING,
      allowNull:false
  },
  ndob:{
      type:DataTypes.DATE,
      allowNull:false
      
  },

  createdAt:{
      type:DataTypes.DATE
  },
  updatedAt:{
      type:DataTypes.DATE
  },
  deletedAt:{
    type:DataTypes.DATE
  },
  tokenlogin:{
      type:DataTypes.BOOLEAN
  },
  }, { sequelize,
    modelName: 'users'});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};