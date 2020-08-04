module.exports = (err, req, res, next) => {
	console.log('Error:', err.message);
	// add Error logging
	res.status(500).json('Something failed - Internal Server Error');
};
