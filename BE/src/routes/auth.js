const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { username, password, email, role, image, team } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({
            username,
            password,
            email,
            role,
            image,
            team,
            created_at: new Date(),
            updated_at: new Date()
        });
        await user.save();

        const payload = { user: { id: user.id, role: user.role } };
        jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send('Server error');
            }
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Request Body:', req.body);
    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'user không hợp lệ' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'mật khẩu không hợp lệ' });
        }

        const payload = { user: { id: user.id, role: user.role, username: user.username } };
        jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});

// Logout
router.post('/logout', auth, (req, res) => {
    res.json({ msg: 'Logged out successfully' });
});

// Get user profile
router.get('/profile', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
