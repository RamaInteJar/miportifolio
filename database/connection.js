require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.connection
.on("open", ()=>console.log('connected to mongoDB'))
.on('close', ()=>console.log('disconnected fro mongoDB'))
.on("error", (e) => console.log('error occured', e));
module.exports = mongoose