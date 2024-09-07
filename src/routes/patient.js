// src/routes/patient.js
const express = require('express');
const router = express.Router();
const { Patient } = require('../models');

router.get('/', async (req, res) => {
  const patients = await Patient.findAll();
  res.json(patients);
});

router.post('/', async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json(patient);
});

module.exports = router;

