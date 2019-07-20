const mongoose = require('mongoose');
const credentials = require('../credentials');

const dbUrl = `mongodb://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.database}`;

let connection = null;
let model = null;

const schema = mongoose.Schema;
mongoose.promise = global.Promise;



module.exports.getModel = 
	() => {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl);
			// model = connection.model("CourseModel", 
			// 					courseSchema);
		};
		return model;
	};