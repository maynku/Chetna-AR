const mongoose=require("mongoose");
const create = require("prompt-sync");
const keywordSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    keyword:[{
      type:Strings,
      required:true,
    }],
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})
module.exports=mongoose.model("keyword",keywordSchema)