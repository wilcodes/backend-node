const express = require('express');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://user:user@cluster0.kpnbpuo.mongodb.net/?retryWrites=true&w=majority');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

router(app);


app.use('/app', express.static('public'));

app.listen(3000);

console.log('The app is listening in http://localhost:3000');