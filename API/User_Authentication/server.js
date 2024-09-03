const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ ...req.body, password: hashedPassword });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login a user
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

