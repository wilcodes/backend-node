const store = require('./store');

const addMessage = (user, message) =>{

const fullMessage = {
     user:user,
     message:message,
     date: new Date()
}

return new Promise((resolve, reject)=>{

     if (!user || !message){
          console.error("Error in message controller");
          reject('Datos Erroneos');
          return false;
     }
     store.add(fullMessage);
     resolve(fullMessage);
})
};

const getMessages = (user) =>{
     return new Promise((resolve, reject)=>{
          resolve(store.list(user));
     })
};

const updateMessage = (id, message) =>{

     return new Promise(async (resolve, reject)=>{
        
          if(!message || !id){
               console.error("Error in message controller:[updateMessage]");
               reject('Message Is Empty');
               return false;
          }
          const data = await store.update(id, message);
          resolve(data);
     })
};

const deleteMessage = (id)=>{

     return new Promise( async (resolve, reject)=>{

          if(!id){
          reject('Null Id');  
          return falsel
          }
          
          store.delete(id).then(()=>{
               resolve('Message Deleted');
          }).catch((e)=>{
               reject('Id not Foound')
          })
          
     })



};



module.exports = {
     addMessage,
     getMessages,
     updateMessage,
     deleteMessage
}