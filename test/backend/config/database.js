
const Sequelize = require('sequelize');
module.exports = new Sequelize('test', 'postgres', 'password', {
  host: 'localhost',
  dialect:'postgres'
});