const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCateogoryTwoSchema = new Schema({
      cateogory:{
            type:Schema.Types.ObjectId,
            ref:"cateogoryOne"//与 cateogoryOne 表进行关联，获取它的ID
      },
      handle:{
            type:String,
            required:true
      },
      cateogoryTwoName:[
            {
                  cateogoryName:{
                        type:String,
                        required:true
                  }
            }
      ],
      date:{
            type:Date,
            default:Date.now
      }
});

module.exports = mongoose.model('cateogoryTwo',ProductCateogoryTwoSchema);