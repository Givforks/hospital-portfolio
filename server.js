const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
const sequelize = new Sequelize('hospital_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

// Test the database connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Define User model
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Sync models
sequelize.sync()
    .then(() => console.log('Models synchronized...'))
    .catch(err => console.log('Error: ' + err));

// Routes
app.get('/', (req, res) => res.send('Hospital Portfolio API'));

// Create a new user
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

