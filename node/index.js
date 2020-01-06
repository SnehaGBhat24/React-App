var express = require('express');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
const { static } = require('express');

var app = express();
var port = process.env.PORT || 3002;
const route = require('./Routes/route')

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/reactDB');
mongoose.connection.on('connected', ()=>{
    console.log('Connected to DB')
})

app.use(cors());

app.use(bodyparser());

app.use(express.static('./public'));

app.use ('/api', route);

app.listen(port, ()=> {
    console.log('Serve started on port' + port)
})

module.exports = app;
