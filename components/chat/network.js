const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/',(req, res)=>{
     controller.createChat(req.body.users)
     .then((data)=>{
          response.success(req, res, data, 201);
     }).catch((e)=>{
          response.error(req, res, e, 401, e);
     })
});

router.get('/:id',(req, res)=>{
     controller.getChats(req.params.id)
     .then((data)=>{
          response.success(req, res, data, 201);
     }).catch((e)=>{
          response.error(req, res,e, 400,e )
     })
})



module.exports = router;