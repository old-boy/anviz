const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema({

});

module.exports  = mongoose.model('home',HomeSchema);