require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authenticateToken = require('./middlewares/authMiddleware');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const authRoutes = require('./routes/authRoutes');
const checkAvailability = require('./middlewares/checkAvailability');

app.use(express.json());
app.use('/api', appointmentRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const sequelize = new Sequelize('hospital_db', 'your_db_username', 'your_db_password', {
  host: '127.0.0.1',
  dialect: 'postgres',
  port: 5432, // Ensure this is the correct port
  logging: false // Disable logging if you prefer
});
