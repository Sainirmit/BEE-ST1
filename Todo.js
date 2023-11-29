const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        author:{
            type:String,
            required:true,
            maxLength:50,
        },
        genre:{
            type:String,
            required:true,
            maxLength:50,
        },
        publicationYear:{
            type:Number,
            required:true,
            MaxLength:4,
        },
        ISBN:{
            type:Number,
            required:true,
            MaxLength:20,
        }
    }
);
module.exports=mongoose.model("todo",todoSchema);