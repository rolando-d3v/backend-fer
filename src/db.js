const mongoose = require('mongoose');

require("dotenv").config()
// const db = process.env.DB

require('./config/config')
mongoose.connect(process.env.URLDB,{
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
},() => {
    console.log('db conected');
} )