const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");

//check connection
connect.then(() => {
    console.log("Connection Succesfull");
})
    .catch(() => {
        console.log("Database cannot be connected");
    });

//Schema Creation
const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    score: {
        type: Number,
        default: 0 // Set default score to 0
    }
});

//collection
const collection=new mongoose.model("users",LoginSchema);

module.exports=collection;