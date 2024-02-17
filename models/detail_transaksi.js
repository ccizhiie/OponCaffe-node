'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {     
    
    static associate(models) {
    }
  }
  detail_transaksi.init({
    id_transaksi: DataTypes.INTEGER,
    id_menu: DataTypes.INTEGER,
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_transaksi',
  });
  return detail_transaksi;
};