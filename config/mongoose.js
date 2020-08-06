const mongoose = require('mongoose');

exports.connectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGOURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
		console.log('MongoDB has connected');
	} catch (error) {
		console.log('MongoDB has NOT connected...', error);
	}
};
