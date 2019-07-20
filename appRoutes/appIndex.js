/**
 * Defines routes for the different views of the app
 */

const express = require('express');
const router = express.Router();

const appModule = require('./appModule.js');

/* superuser views */
const displayAllUsers = appModule.displayAllUsers; // intended for superuser only
const displayAllAuctions = appModule.displayAllAuctions;

const signIn = appModule.signIn;
const signUp = appModule.signUp;
const displayCurrentUser = appModule.displayCurrentUser;
const createAuction = appModule.createAuction;
const saveAuction = appModule.saveAuction;
const editAuction = appModule.editeAuction;
const deleteAuction = appModule.deleteAuction;
const displayUserMessages = appModule.displayUserMessages;
const createMessage = appModule.createMessage;
const saveMessage = appModule.saveMessage;
const editMessage = appModule.editMessage;
const deleteMessage = appModule.deleteMessage;
const createGenre = appModule.createGenre;
const saveGenre = appModule.saveGenre;
const editGenre = appModule.editGenre;
const deleteGenre = appModule.deleteGenre;
const createBeat = appModule.createBeat;
const saveBeat = appModule.saveBeat;
const editBeat = appModule.editBeat;
const deleteBeat = appModule.deleteBeat; 
const createBid = appModule.createBid;
const saveBid = appModule.saveBid;
const editBid = appModule.editBid;
const deleteBid = appModule.deleteBid;
const createComment = appModule.createComment;
const saveComment = appModule.saveComment;
const editComment = appModule.editComment;
const deleteComment = appModule.deleteComment;

router.get('/', (req, res, next)=>{
    res.redirect('/signIn');
});

router.get('/signIn', signIn);

// router.get('/auctions', displayAllAuctions);
// router.get('/users', displayAllUsers);

// router.get('/signIn', signIn);
// router.get('/signUp', signUp);
router.get('/user/:id', displayCurrentUser);
// router.get('/user/:id/messages', displayUserMessages);
// router.get('/auction/:id', showAuction);
// router.get('/auction/create', createAuction);
// router.post('/auction/create', saveAuction);
// router.post('/auction/edit/:id', editAuction);
// router.get('/deleteAuction/:id', deleteAuction);
// router.get('message/create', createMessage);
// router.post('message/delete', deleteMessage);
// router.get('message/:id', editMessage);
// router.post('message/:id', saveMessage);
// router.get('genre/create', genreMessage);

module.exports = router;
