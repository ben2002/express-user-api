const mongoose = require('mongoose');

exports.connectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGOURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
		console.log('MongoDB connected');
	} catch (error) {
		console.log('MongoDB has NOT connected');
		handleError(error);
	}
};
