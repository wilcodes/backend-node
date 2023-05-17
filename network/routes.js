const messages = require('../components/message/network');

const routes =(server)=>{
     server.use('/messages',messages);
  
}

module.exports = routes;