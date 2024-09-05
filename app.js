require('dotenv').config();
const express = require('express');
const app = express();
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
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
