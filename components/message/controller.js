
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
     console.log(fullMessage);
     resolve(fullMessage);
})
};


module.exports = {
     addMessage,
}