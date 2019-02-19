const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCateogorySchema = new Schema({
      user:{
            type:Schema.Types.ObjectId,
            ref:"users"
      },
      product:[],
      cateogoryName:{
            type:String,
            required:true
      },
      cateogoryDes:{
            type:String
      },
      subTwoCateogory:[],
      subThreeCateogory:[],
      date:{
            type:Date,
            default:Date.now
      }
});

module.exports = mongoose.model('cateogories',ProductCateogorySchema);
