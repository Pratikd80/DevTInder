const express=require("express");
const connectDB=require("./config/database");
const app=express();
app.use(express.json());
    const userModel=require("../../models/user");
app.post("/signup",async(req,res)=>{
 
    const user= new userModel(req.body);
    try{await user.save();
        res.send("User added")
    }catch(err){
res.send("Error saving the user")
    }
  
})


connectDB().then(()=>{console.log("Database up and running")
    app.listen(7777,()=>{
        console.log("Server has started")
    })
}).catch((err)=>{
    console.error("Database cannot be connected")
})

