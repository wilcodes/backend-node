const db = require('mongoose');
db.Promise = global.Promise;
 
const connect = async (url) =>{
     try{
          await db.connect(url);
          console.log('Connected to mongo');
     } catch(e){
          console.error('error en conectandose a la base de datos');
     }
     
};


module.exports = connect;
