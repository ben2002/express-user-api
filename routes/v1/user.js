const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');

// @route   GET api/user
// @desc    Test get route
// @access  Public
router.get('/', userController.getUser);

// @route   POST api/user
// @desc    Test post route
// @access  Public
router.post('/', userController.createUser);

module.exports = router;
