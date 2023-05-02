const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const response = require('./network/response');


var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(router);

router.get('/message',(req,res)=>{
     

     res.header({
          "custom-header":"Valor unico"
     })
     // res.send('Lista de Mensajes');
     response.success(req,res,'Message testing',201);
});

router.post('/message',(req,res)=>{
     if (req.query.error == 'ok'){
          response.error(req, res, 'Error simulado', 400)
     }else {
          response.success(req,res,'New Message Added',201);
     }
     
});

// app.use('/',(req,res)=>{
//      res.send('hola');
// });



app.listen(3000);

console.log('The app is listening in http://localhost:3000');