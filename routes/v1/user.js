const express = require('express');

const userController = require('../../controller/userController');

const router = express.Router();

router
	.route('/')
	/**
	 * @api {get} /api/user Get all Users
	 * @apiName ListUsers
	 * @apiGroup Users
	 * @apiDescription Get a list of all users
	 * @apiVersion 1.0.0
	 * @apiPermission admin
	 *
	 * apiSuccess {}
	 */
	.get(userController.getUsers)

	// @route   POST api/user
	// @desc    register new user
	// @access  Public
	.post(userController.createUser);

router
	.route('/me')
	// @route   GET api/user/id
	// @desc    get one user
	// @access  Private
	.get(userController.getUser)

	// @route   PATCH api/user/id
	// @desc    update one user
	// @access  Private
	.patch(userController.editUser)

	// @route   DELETE api/user/id
	// @desc    delete one user
	// @access  Private
	.delete(userController.deleteUser);

module.exports = router;
