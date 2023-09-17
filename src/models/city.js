// JS level table definition for the City table
// Now we will do association between the City and Airport table. We will add a cityId column in the Airport table and associate it with the City table.
// 1 to many association between City and Airport table
// 1 city can have many airports
// 1 airport belongs to 1 city

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Airport, {
        foreignKey: 'cityId'
      });  // 1 city can have many airports
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};