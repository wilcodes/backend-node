const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messagesSchema = new Schema({
   user: String
});


const model = mongoose.model('user', messagesSchema);

module.exports = model;
