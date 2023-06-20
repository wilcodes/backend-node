const store = require('./store');


const addUser = (user) =>{

     if(!user){
          return Promise.reject();
     }
     return store.add(user);

};

const getUsers = ()=>{
     return store.get();
};

module.exports = {
     addUser,
     getUsers
}