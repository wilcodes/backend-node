const store = require('./store');


const createChat = (users)=>{

     if (!users && !Array.isArray(users)){
          Promise.reject();
     }

     const chat ={
          users:users
     }

     return store.create(chat);

};

const getChats = (id)=>{

     return store.get(id);
};


module.exports = {
     createChat,
     getChats
}