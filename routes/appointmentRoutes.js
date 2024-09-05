const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/appointments', appointmentController.createAppointment);
router.get('/appointments/doctor/:doctor_id', appointmentController.getAppointmentsByDoctor);
router.get('/appointments/patient/:patient_id', appointmentController.getAppointmentsByPatient);

module.exports = router;

