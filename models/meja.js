'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meja extends Model {
    static associate(models) {
    }
  }
  meja.init({
    nomor_meja: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'meja',
  });
  return meja;
};