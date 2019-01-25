const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
      fullName:{
            type:String,
            required:true
      },
      email:{
            type:String,
            required:true
      },
      password:{
            type:String,
            required:true
      },
      rePassword:{
            type:String,
            required:true
      },
      isChecked:{
            type:String,
            default:true
      },
      onLine:{
            type:String
      },
      date:{
            type:Date,
            default:Date.now
      }
});

module.exports = mongoose.model('users',UserSchema);