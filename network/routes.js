const messages = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');
const routes =(server)=>{
     server.use('/messages',messages);
     server.use('/user',user);
     server.use('/chat',chat);
}

module.exports = routes;