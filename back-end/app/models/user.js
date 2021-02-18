const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  })

  return Users;
}