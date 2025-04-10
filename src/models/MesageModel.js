const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');


const Message = sequelize.define('message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  present: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }

}, {
  timestamps: true, // Enable createdAt and updatedAt fields
});

module.exports = Message;