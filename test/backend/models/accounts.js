'use strict';
module.exports = (sequelize, DataTypes) => {
  const accounts = sequelize.define('accounts', {
    AccountNo: DataTypes.STRING,
    custId: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    IsPrimary: DataTypes.BOOLEAN
  }, {});
  accounts.associate = function(models) {
    // associations can be defined here
  };
  return accounts;
};