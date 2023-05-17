const express = require('express');
const response = require('./network/response');
const router = require('./network/routes');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

router(app);


app.use('/app', express.static('public'));

app.listen(3000);

console.log('The app is listening in http://localhost:3000');