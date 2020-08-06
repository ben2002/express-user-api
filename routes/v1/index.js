const express = require('express');

const userRoutes = require('./user');
const authRoutes = require('./auth');
const homeRoutes = require('./home');
const error = require('../../middleware/error');

const router = express.Router();

// Route handling
router.use('/api/user', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/dashboard', homeRoutes);

// Error handling in the request process pipeline
router.use(error);

module.exports = router;
