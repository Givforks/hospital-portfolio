require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const sequelize = new Sequelize('hospital_db', 'your_db_username', 'your_db_password', {
  host: '127.0.0.1',
  dialect: 'postgres',
  port: 5432, // Ensure this is the correct port
  logging: false // Disable logging if you prefer
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define a model
const Patient = sequelize.define('Patient', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  });

// Routes
app.get('/', (req, res) => {
  res.send('Hospital Management System');
});

app.post('/patients', async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

