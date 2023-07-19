const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const plants = require('./Routes/plants');
const register= require('./Routes/register');
const login= require('./Routes/login');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("successs");
})
app.use('/register',register);
app.use('/plants',plants);
app.use('/login',login);

module.exports = app;