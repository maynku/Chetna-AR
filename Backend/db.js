const mongoose = require('mongoose');
require('dotenv').config();
console.log("Loaded mongoURL:", process.env.MONGODB_URL_LOCAL);



const mongoURL = process.env.MONGODB_URL_LOCAL
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to mongo DB server')
})

db.on('error',(err)=>{
    console.log("MongoDb error",err)
})

db.on('disconnected',()=>{
    console.log('MongoDB Discoonected');
})

module.exports=db;