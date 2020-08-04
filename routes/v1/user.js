const express = require('express');

const User = require('../../models/userModel');

const router = express.Router();

// @route   GET api/user
// @desc    get all users
// @access  Admin
router.get('/', async (req, res) => {
	const allUsers = await User.find();
	res.json(allUsers);
});

// @route   GET api/user
// @desc    get one user
// @access  Private
router.get('/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const user = await User.findById(_id);
		if (!user) res.status(404).send('The user with the given ID was not found');
		res.json(user);
	} catch (error) {
		console.log('Errorrrrr:', error);
	}
});

// @route   POST api/user
// @desc    register new user
// @access  Public
router.post('/', async (req, res) => {
	try {
		const user = new userModel.User(req.body);
		const savedUser = await user.save();
		res.json(savedUser);
	} catch (error) {
		console.log('Error:', error);
	}
});

// @route   PUT api/user
// @desc    update one user
// @access  Private
router.put('/', async (req, res) => {
	console.log('update user');
});

// @route   DELETE api/user
// @desc    delete one user
// @access  Private
router.delete('/', async (req, res) => {
	console.log('delete user');
});

module.exports = router;
