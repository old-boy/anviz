const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCateogoryTwoSchema = new Schema({
      parentCateogoryId:{
            type:Schema.Types.ObjectId,
            ref:"cateogories",
            required:true
      },
      parentCateogoryName:{
            type:String
      },
      subCateogoryName:{
            type:String,
            required:true
      },
      date:{
            type:Date,
            default:Date.now
      }
});

module.exports = mongoose.model('twoCateogories',ProductCateogoryTwoSchema);
