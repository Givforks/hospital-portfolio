const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/patients', patientController.getAllPatients);

// Add other routes as needed

module.exports = router;

