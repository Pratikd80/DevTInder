const mongose=require("mongoose");
const connectDB=
async()=>{
    await mongose.connect("mongodb+srv://pratikd80:5G9Uq8LRYIrlBz3S@devtinder.rqndm.mongodb.net/devtindder")
};
module.exports=connectDB