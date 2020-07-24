const userModel = require('../models/userModel');

const getUser = (req, res) => {
	console.log('test user get route');
};

const createUser = (req, res) => {
	try {
		console.log('test user post route');
		console.log(req.body);

		const user = new userModel.User(req.body);
		const savedUser = user.save();

		console.log(savedUser);

		res.json(savedUser);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getUser,
	createUser
};
