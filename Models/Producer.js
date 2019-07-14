let mongoose = require('mongoose');
let credentials = require('../credentials');

const dbUrl = `mongodb://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.database}`;

const connection = mongoose.createConnection(dbUrl);
let test_seller = {};
MongoClient.connect(dbUrl, (err, client)=>{
    if(err) throw err;
    let collection = client.db(credentials.database).collection('sellers');
    collection.insert({

    });
    client.close();
});