const express = require('express');
const db = require('./db');
const router = require('./network/routes');
const cors = require('cors');
db('mongodb+srv://user:user@cluster0.kpnbpuo.mongodb.net/?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

router(app);

app.use('/app', express.static('public'));

app.listen(3000);

console.log('The app is listening in http://localhost:3000');