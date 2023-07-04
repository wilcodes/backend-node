const Model = require('./model');

const createChat = async (conversation) =>{
    const chat = new Model(conversation)
    return chat.save();
};


const getChat = async (userId)=>{

  let userData = {};

     if (userId !== null) {
       userData = { users: userId };
       console.log(userId);
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