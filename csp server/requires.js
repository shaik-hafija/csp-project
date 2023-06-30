// const express=require('express');
// const bodyParser = require("body-parser");

// const cors=require('cors')

// const plant=require('./Routes/plants')
// const app=express()
// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}));
// app.use('/plant',plant)
// module.exports = app;
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const plants = require('./Routes/plants');
//const Teachers = require('./Routes/Teachers')
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("successs");
})
app.use('/plants',plants);
//app.use('/Teachers', Teachers);
module.exports = app;