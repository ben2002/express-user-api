const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const roles = ['user', 'admin'];
const SALT = 10;

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			maxlength: 128,
			trim: true
		},
		email: {
			type: String,
			match: /^\S+@\S+\.\S+$/,
			required: true,
			trim: true,
			lowercase: true
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 128
		},
		role: {
			type: String,
			enum: roles,
			default: 'user'
		}
	},
	{
		timestamps: true
	}
);

userSchema.pre('save', async function (next) {
	try {
		if (!this.isModified('password')) return next();

		const hash = await bcrypt.hash(this.password, SALT);
		this.password = hash;

		console.log('password hashed:', this.password);

		return next();
	} catch (err) {
		return next(err);
	}
});

module.exports = mongoose.model('User', userSchema);
