const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(5000, () => {
  console.log('Backend server is running on http://localhost:5000');
});
