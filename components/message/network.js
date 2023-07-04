const express = require('express');
const response = require('../../network/response');
const multer = require('multer')
const controller = require('./controller');
const router = express.Router();
const path = require('path');


const storage = multer.diskStorage({
    destination : "public/files",
    filename : function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() +
        path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage });

router.get('/',(req,res)=>{
    const user = req.query.user || null;
    controller.getMessages(user).then((messagesList)=>{
        response.success(req, res , messagesList);
    })

});

router.post('/', upload.single('file'), (req,res)=>{

    controller.addMessage(req.body.user, req.body.message, req.body.chat, req.file)
    .then(
     (fullMessage)=> response.success(req, res, fullMessage,201)
    ).catch(e=>{
          response.error(req, res, 'Error de datos', 400, e);
    })

});


router.patch('/:id',(req, res) =>{

    controller.updateMessage(req.params.id, req.body.message)
    .then((data)=>{
        response.success(req,res, data, 200);
    }).catch((e)=>{
        response.error(req, res, 'Error Interno', 400, e);
    })
});

router.delete('/:id',(req,res)=>{
    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.success(req, res, `Mensaje de Usuario ${req.params.id} Deleted`, 200);
    }).catch((e)=>{
        response.error(req, res, 'Error Interno', 400, e);
    })
});


module.exports = router;
