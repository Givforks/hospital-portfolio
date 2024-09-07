const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const dotenv = require('dotenv');

dotenv.config();

exports.register = async (req, res) => {
	    try {
		            const { username, password } = req.body;
		            const hashedPassword = await bcrypt.hash(password, 10);
		            const newUser = await User.create({ username, password: hashedPassword });
		            res.status(201).json(newUser);
		        } catch (error) {
				        res.status(500).json({ message: 'Error registering user.' });
				    }
};

exports.login = async (req, res) => {
	    try {
		            const { username, password } = req.body;
		            const user = await User.findOne({ where: { username } });
		            if (!user) return res.status(400).json({ message: 'Invalid username or password.' });

		            const validPassword = await bcrypt.compare(password, user.password);
		            if (!validPassword) return res.status(400).json({ message: 'Invalid username or password.' });

		            const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
		            res.status(200).json({ token });
		        } catch (error) {
				        res.status(500).json({ message: 'Error logging in.' });
				    }
};

