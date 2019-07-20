const mongoose = require('mongoose');
const appDb = require('./appDB');
const credentials = require('../credentials.js');

const dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

const connection = mongoose.createConnection(dbUrl);
const User = appDb.getUserModel(connection);

module.exports.signIn = (req, res,next)=>{
    res.render('signInView');
}

module.exports.displayCurrentUser = (req, res,next)=>{
    let id = req.params.id;

    User.find({"user_id":id}, (err, user)=>{
        if(!user){
            return res.render('404');
        }
        res.render('displayCurrentUserView', {data: id});
    })
}

// module.exports.
