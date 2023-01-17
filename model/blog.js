const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=Schema.ObjectId;
const blogSchema=new Schema(
    {
        topic:{type:String,required:true},
        description:{type:String,required:true},
        posted_at:{
            type: Date,
            default: Date.now,
        },
        posted_by:{type:String,required:true}
    },{timestamps:true}
)
const blogModel=mongoose.model("Blog",blogSchema);
module.exports=blogModel;