const Model = require('./model');

const addMessage = (message)=>{
   const newMessage = new Model(message);
   newMessage.save();
};

const getMessages = async (user) =>{

     let userData = {};

     if (user !== null) {
       userData = { user: user };
     }
     
     try {
       const messages = await Model.find(userData).populate('user').exec();
       return messages
       
     } catch (error) {
     throw new Error(error);
     }

};

const updateMessage = async (id, message) =>{
     
     const foundMessage = await Model.findOne({_id:id});
     foundMessage.message = message;
     const newMessage = await foundMessage.save();
     return newMessage;

};

const deleteMessage = async (id) =>{
     const messageDeleted = await Model.deleteOne({_id:id});
     return messageDeleted;

};


module.exports = {
     add: addMessage,
     list : getMessages,
     update : updateMessage,
     delete : deleteMessage,
}