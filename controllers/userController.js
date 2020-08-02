const userModel = require('../models/userModel');
const { User } = require('../models/userModel');

// @route   GET api/user
// @desc    get all users
const getUsers = async (req, res) => {
	try {
		const allUsers = await User.find();
		res.json(allUsers);
	} catch (error) {
		console.log('Error:', error);
	}
};

// @route   GET api/user
// @desc    get one user
const getUser = async (req, res) => {
	const _id = req.params.id;
	try {
		const user = await User.findById(_id);
		if (!user) res.status(404).send('The user with the given ID was not found');
		res.json(user);
	} catch (error) {
		console.log('Error:', error);
	}
};

// @route   POST api/user
// @desc    create new user
const createUser = async (req, res) => {
	try {
		console.log('test user post route');
		console.log(req.body);

		const user = new userModel.User(req.body);
		const savedUser = await user.save();

		console.log(savedUser);

		res.json(savedUser);
	} catch (error) {
		console.log('Error:', error);
	}
};

// @route   PUT api/user
// @desc    update a user
const updateUser = async (req, res) => {};

// @route   DELETE api/user
// @desc    delete a user
const deleteUser = async (req, res) => {};

module.exports = {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser
};
