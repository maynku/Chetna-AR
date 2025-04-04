const express=require('express');
const mongoose=require('mongoose');
const websocket=require('websocket');
const bodyParser=require('body-parser');

const app=express(); //ek uska instance bna diya 
app.use(bodyParser.json()); //req.body m savw krega missle ware taki aasani se data acess ho sake 

const audioRoutes=require('./Routes/audio');
const cameraRoutes=require('./Routes/camera');
const eegRoutes=require('./Routes/eeg');
const eventRoutes=require('./Routes/event');
const keywordRoutes=require('./Routes/keyWord');
const sessionRoutes=require('./Routes/session');
const textlogRoutes=require('./Routes/textLog');
const userRoutes=require('./Routes/user');
const whtsaapRoutes=require('./Routes/whatsaap');

// app.use('/audio',audioRoutes);
// app.use('/camera',cameraRoutes);
// app.use('/eeg',eegRoutes);
// app.use('/event',eventRoutes);
// app.use('/keyword',keywordRoutes);
// app.use('/session',sessionRoutes);
// app.use('/textlog',textlogRoutes);
// app.use('/user',userRoutes);
// app.use('/whtsapap',whtsaapRoutes);

require('dotenv').config();
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listening on${PORT}`);
})


