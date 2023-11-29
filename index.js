const express=require('express');
const { connect } = require('mongoose');
const app=express();

const PORT=process.env.PORT ||4000;
app.use(express.json());
const todoRoutes=require("./routes/todos1");
app.use("/",todoRoutes);
app.listen(PORT,()=>{
   console.log(`server started at ${PORT}`);
})
const dbConnect=require("./config/database");
dbConnect();
app.get("/",(req,res)=>{
   res.send(`<h1>This is the Homepage</h1>`);
})