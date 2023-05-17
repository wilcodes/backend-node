const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/',(req,res)=>{
    response.success(req, res,'messaged Added from Network messages');
});

router.post('/',(req,res)=>{
     if (req.query.error == 'ok'){
          response.error(req, res, 'Error simulado', 500, 'es solo una simulacion');
     }else {
          response.success(req,res,'New Message Added',200);
     }
     
});


module.exports = router;