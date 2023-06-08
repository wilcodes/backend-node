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

const getMessages = () =>{
     return new Promise((resolve, reject)=>{
          resolve(store.list())
     })
};


module.exports = {
     addMessage,
     getMessages
}