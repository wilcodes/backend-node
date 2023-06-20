const Model = require('./model');

const createChat = async (conversation) =>{
    const chat = new Model(conversation)
    return chat.save();
};


const getChat = async (user)=>{

  let userData = {};

     if (user !== null) {
       userData = { users: user };
     }
     
   
     try {
       const chats = await Model.find(userData).populate('users').exec();
       return chats;
       
     } catch (error) {
     throw new Error(error);
     }

};


module.exports = {
     create: createChat,
     get:getChat
};