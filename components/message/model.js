const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const messagesSchema = new Schema({
     user:{
          type:Schema.ObjectId,
          ref:'user',
          required: true
     },
     message:{
          type:String,
          required:true,
     },
     date: Date,
     chat:{
          type:Schema.ObjectId,
          ref:'chat',
          required: true
     },
     file:String
});


const model = mongoose.model('Message', messagesSchema);

module.exports = model;
