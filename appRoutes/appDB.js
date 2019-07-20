/************************************
 * Creates schema for each model 
 * in the app
 *************************************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    user_id: Number,
    user_type: Number,
    first_name: String,
    last_name: String,
    user_name: String,
    password: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    phone: String,
    following: Array,
    followed_by: Array
});
const auctionSchema = new Schema({
    auction_id: Number,
    start_time: Date,
    end_time: Date,
    buy_now_price: Number,
    users: Array,
    beats: Array
});
const messageSchema = new Schema({
    message_id: Number,
    text: String,
    user_id: Number,
    recipients: Array
});
const playSchema = new Schema({
    play_id: Number,
    beat_id: Number,
    user_id: Number,
    date: String,
    time_stamp: String
});
const genreSchema = new Schema({
    genre_id: Number,
    name: String,
    description: String,
    users: Array,
    beats: Array
});
const bidSchema = new Schema({
    bid_id: Number,
    auction_id: Number,
    listener_id: Number,
    amount: Number,
    date_time: String
});
const beatSchema = new Schema({
    beat_id: Number,
    title: String,
    sound_file_url: String,
    user_id: Number,
    likes: Array, //user_id
    genres: Array, // genre_id
    comments: Array // comment_id
});
const commentSchema = new Schema({
    comment_id: Number,
    text: String,
    user_id: Number
});

module.exports = {
    getUserModel: (connection)=>{ return connection.model("UserModel", userSchema) },
    getAuctionModel: (connection)=>{ return connection.model("AuctionModel", auctionSchema) },
    getMessageModel: (connection)=>{ return connection.model("MessageModel", messageSchema) },
    getPlayModel: (connection)=>{ return connection.model("PlayModel", playSchema) },
    getGenreModel: (connection)=>{ return connection.model("GenreModel", genreSchema) },
    getBidModel: (connection)=>{ return connection.model("BidModel", bidSchema) },
    getBeatModel: (connection)=>{ return connection.model("BeatModel", beatSchema) },
    getCommentModel: (connection)=>{ return connection.model("CommentModel",commentSchema) }
};