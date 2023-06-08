const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const messagesSchema = new Schema({
     user:String,
     message:{
          type:String,
          required:true,
     },
     date: Date
});


const model = mongoose.model('Message', messagesSchema);

module.exports = model;
