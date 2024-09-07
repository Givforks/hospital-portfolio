const Appointment = require('../models/appointment');

module.exports = async (req, res, next) => {
  const { doctor_id, appointment_date } = req.body;
  const existingAppointment = await Appointment.findOne({
    where: { doctor_id, appointment_date }
  });

  if (existingAppointment) {
    return res.status(400).json({ error: 'Doctor is not available at this time' });
  }

  next();
};

