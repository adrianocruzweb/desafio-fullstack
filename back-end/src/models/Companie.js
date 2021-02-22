const { Model, DataTypes } = require('sequelize')

class Companie extends Model {
  static init(sequelize) {
    super.init(
      {
        nameCompanie: DataTypes.STRING,
        emailContact: DataTypes.STRING,
        address: DataTypes.STRING,
      },
      {
        sequelize
      }
    )
  }
}

module.exports = Companie