const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

const Inventory = sequelize.define('Inventory', {
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  supplier: {
    type: DataTypes.STRING,
  },
  received_date: {
    type: DataTypes.DATE,
  },
  expiry_date: {
    type: DataTypes.DATE,
  },
});

module.exports = Inventory;

