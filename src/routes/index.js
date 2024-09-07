// src/routes/index.js
const express = require('express');
const router = express.Router();
const patientRoutes = require('./patient');

router.use('/patients', patientRoutes);

module.exports = router;

