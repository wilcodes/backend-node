const Model = require('./model');
const db = require('mongoose');
db.Promise = global.Promise;

try{
     const url = `mongodb+srv://user:user@cluster0.kpnbpuo.mongodb.net/?retryWrites=true&w=majority`;
     db.connect(url);
     console.log('Connected to mongo');
} catch(e){
     console.error('error en conectandose a la base de datos');
}


const addMessage = (message)=>{
   const newMessage = new Model(message);
   newMessage.save();
};

const getMessages = async () =>{
    const messages = await Model.find();
     return messages;
};


module.exports = {
     add: addMessage,
     list : getMessages,
}