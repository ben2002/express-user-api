const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
	const allUsers = await User.find({}).select('-password');
	res.json(allUsers);
};

exports.createUser = async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (user) return res.status(404).json('email already exists');

	const newUser = new User(req.body);
	const savedUser = await newUser.save();

	res.json(savedUser);
};

exports.getUser = async (req, res) => {
	console.log('get single user');
};

exports.editUser = async (req, res) => {
	console.log('Patch user');
};

exports.deleteUser = async (req, res) => {
	console.log('Delete user');
};
