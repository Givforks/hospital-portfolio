const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

const Booking = sequelize.define('Booking', {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  appointment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  doctor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Booking;

