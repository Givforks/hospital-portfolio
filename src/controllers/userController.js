const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { user } = require('../models');
const dotenv = require('dotenv');

const express = require('express');
const router = express.Router();

// Example function to get users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Example function to create a user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getUsers, createUser };



