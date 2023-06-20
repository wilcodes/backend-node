const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const chatSchema = new Schema({
     users:[{
          type:Schema.ObjectId,
          ref:'user'
     }]
});


const model = mongoose.model('chat', chatSchema);

module.exports = model;
