const { Patient } = require('./models');

const getPatients = async (req, res) => {
  const patients = await Patient.findAll();
  res.json(patients);
};

const createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
};

module.exports = { getPatients, createPatient };

