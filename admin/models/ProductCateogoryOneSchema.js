const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCateogorySchema = new Schema({
      user:{
            type:Schema.Types.ObjectId,
            ref:"users"
      },
      cateogoryName:{
            type:String,
            required:true
      },
      cateogoryDes:{
            type:String
      },
      date:{
            type:Date,
            default:Date.now
      }
});

module.exports = mongoose.model('cateogories',ProductCateogorySchema);
