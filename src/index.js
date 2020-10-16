const express = require("express");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// require("dotenv").config()
require('./db')

//server
const port = process.env.PORT || 3500
const app = express();
app.listen(port, () => {
  console.log(`server conectado in port ${port}`);
});

//para enviar datos del postman
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//MIDDLEWARE
app.use(fileUpload())

//routers
app.use('/', require('./routers/usuario'))
app.use('/', require('./routers/Login'))
app.use('/', require('./routers/categorias'))
app.use('/', require('./routers/productos'))
app.use('/', require('./routers/upload'))



