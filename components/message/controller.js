const store = require('./store');

const addMessage = (user, message, chat, file) =>{



let fileUrl = '';

if(file){
     fileUrl = 'http://localhost:3000/app/files/'+ file.filename ;
}
const fullMessage = {
     user:user,
     message:message,
     date: new Date(),
     chat: chat,
     file: fileUrl
}

console.log(fileUrl);
return new Promise((resolve, reject)=>{

     if (!user || !message || !chat){
          console.error("Error in message controller");
          reject('Datos Erroneos');
          return false;
     }
     store.add(fullMessage);
     resolve(fullMessage);
})
};

const getMessages = (user) =>{
     return new Promise((resolve)=>{
          resolve(store.list(user));
     })
};

const updateMessage = (id, message) =>{

          if(!message || !id){
               console.error("Error in message controller:[updateMessage]");
              Promise.reject('Message Is Empty');
               return false;
          }
         return  store.update(id, message);


};

const deleteMessage = (id)=>{

          if(!id){
          Promise.reject('Null Id');
          return false;
          }

          return store.delete(id);
};



module.exports = {
     addMessage,
     getMessages,
     updateMessage,
     deleteMessage
}
