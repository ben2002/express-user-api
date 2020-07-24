const express = require('express');

const userRoutes = require('./user');
const authRoutes = require('./auth');

const router = express.Router();

router.use('/api/user', userRoutes);
router.use('/api/auth', authRoutes);

router.get('/', (req, res) => {
	res.send('Test home');
});

module.exports = router;
