const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// GET /users route
router.get('/users', async (req, res) => {
  try {
    await getUsers(req, res);
  } catch (error) {
    console.error('Error in GET /users route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /users route
router.post('/users', async (req, res) => {
  try {
    await createUser(req, res);
  } catch (error) {
    console.error('Error in POST /users route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

