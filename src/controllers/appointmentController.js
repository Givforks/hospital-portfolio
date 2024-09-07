const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

exports.createAppointment = async (req, res) => {
  try {
    const { patient_id, doctor_id, appointment_date } = req.body;
    const appointment = await Appointment.create({ patient_id, doctor_id, appointment_date });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAppointmentsByDoctor = async (req, res) => {
  try {
    const { doctor_id } = req.params;
    const appointments = await Appointment.findAll({ where: { doctor_id } });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAppointmentsByPatient = async (req, res) => {
  try {
    const { patient_id } = req.params;
    const appointments = await Appointment.findAll({ where: { patient_id } });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

