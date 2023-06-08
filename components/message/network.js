const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/',(req,res)=>{
    controller.getMessages().then((messagesList)=>{
        response.success(req, res , messagesList);
    })
    
});

router.post('/',(req,res)=>{
   
    controller.addMessage(req.body.user, req.body.message).then(
     (fullMessage)=> response.success(req, res, fullMessage,201)
    ).catch(e=>{
          response.error(req, res, 'Error de datos', 400);
    })
     
});


module.exports = router;