const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_practice','root','1620',{dialect: 'mysql',host:'localhost'})


module.exports = sequelize;