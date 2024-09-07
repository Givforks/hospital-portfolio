// routes/patientRoutes.js

const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Define a route to get all patients
router.get('/patients', patientController.getAllPatients);

// Define a route to get a single patient by ID
router.get('/patients/:id', patientController.getPatientById);

// Define a route to create a new patient
router.post('/patients', patientController.createPatient);

// Define a route to update a patient by ID
router.put('/patients/:id', patientController.updatePatient);

// Define a route to delete a patient by ID
router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;

