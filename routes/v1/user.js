const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');

// @route   GET api/user
// @desc    Test get all users route
// @access  Admin
router.get('/', userController.getUsers);

// @route   GET api/user
// @desc    Test get one user route
// @access  Private
router.get('/:id', userController.getUser);

// @route   POST api/user
// @desc    Test post route
// @access  Public
router.post('/', userController.createUser);

// @route   PUT api/user
// @desc    Test update route
// @access  Private
router.put('/', userController.updateUser);

// @route   DELETE api/user
// @desc    Test delete route
// @access  Private
router.delete('/', userController.deleteUser);

module.exports = router;
