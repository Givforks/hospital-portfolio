const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
});

const Appointment = sequelize.define('Appointment', {
  patient_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Patients',
      key: 'patient_id',
    },
  },
  doctor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Doctors',
      key: 'doctor_id',
    },
  },
  appointment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'scheduled',
  },
});

module.exports = Appointment;

