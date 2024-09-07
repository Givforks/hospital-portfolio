const express = require('express');
const router = express.Router();
const { getPatients, createPatient } = require('./controllers');

router.get('/patients', getPatients);
router.post('/patients', createPatient);

module.exports = router;

