/*************************************
 * Pre-seed the database with default 
 * genres.
 ************************************/

const mongoose = require('mongoose');
const credentials = require("../credentials.js"); 

const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

const connection = mongoose.createConnection(dbUrl);

const seedDb = require('../appDB.js');
const Genre = seedDb.getGenreModel(connection);
const User = seedDb.getUserModel(connection);

connection.on("open", () => {
	
	// create and save document objects
	let user, play, beat, auction, genre, comment, bid, message;

	user = new User({
		user_id: 1,
		first_name: "Xavier",
		last_name: "McCaskie",
		user_name: "Xay",
		password: "xmcaskie",
		address: "123 Main Street",
		city: "Columbus",
		state: "GA",
		zipcode: "12345",
		following: [],
		followed_by: []
	});
	user.save();


	genre = new Genre({
		genre_id: 1,
		name: 'Hip hop',
		description: 'Classic, hardcore, ganster, all sub-genres',
		users: [],
		beats: []
	}); 
	genre.save();

	genre = new Genre({
		genre_id: 1,
		name: 'Rock',
		description: 'Classic, metal, all sub-genres',
		users: [],
		beats: []
	}); 
	genre.save();
  
	genre = new Genre({
		genre_id: 1,
		name: 'Soul',
		description: 'Classic, all sub-genres',
		users: [],
		beats: []
	}); 
	genre.save((err) => {
		connection.close();
		if (err) throw err;
		console.log("Success!");
	});
	
});










