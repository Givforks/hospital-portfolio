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
sequelize.sync();

// Routes
app.get('/', (req, res) => res.send('Hospital Portfolio API'));

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));

