const { Model, DataTypes } = require('sequelize');
const {dbInstance} = require('../db/sequelize-config');

class Logins extends Model {

};

Logins.init({
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
       type: DataTypes.INTEGER,
       allowNull: false
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize: dbInstance,
    modelName: 'Logins',
    createdAt: false,
    updatedAt: false
  });
  module.exports = { Logins }