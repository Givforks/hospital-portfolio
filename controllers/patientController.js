// controllers/patientController.js

const { Patient } = require('../models');

// Get all patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching patients.' });
    }
};

// Get a single patient by ID
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            res.status(200).json(patient);
        } else {
            res.status(404).json({ error: 'Patient not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the patient.' });
    }
};

// Create a new patient
exports.createPatient = async (req, res) => {
    try {
        const newPatient = await Patient.create(req.body);
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the patient.' });
    }
};

// Update a patient by ID
exports.updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            await patient.update(req.body);
            res.status(200).json(patient);
        } else {
            res.status(404).json({ error: 'Patient not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the patient.' });
    }
};

// Delete a patient by ID
exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (patient) {
            await patient.destroy();
            res.status(200).json({ message: 'Patient deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Patient not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the patient.' });
    }
};

