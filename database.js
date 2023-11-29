const mongoose=require('mongoose');

const dbConnect=()=>{
    mongoose.connect("mongodb+srv://sainirmit:<sainirmit1234>@cluster0.gztazp0.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log("error ");
        process.exit(1);
    });

}
module.exports=dbConnect;