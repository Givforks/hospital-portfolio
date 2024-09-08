const { Patient } = require('./models');

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getPatients, createPatient };

