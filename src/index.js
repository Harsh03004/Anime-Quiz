const express=require('express');
const pasth=require('path');
const bcrypt=require('bcrypt');
const { rename } = require('fs');
const collection=require("./config");

const app=express();

//convert data to json
app.use(express.json());

app.use(express.urlencoded({extended:false}));

// use ejs as a view engine//
app.set('view engine','ejs');

//static folder path
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("login-signup");
});

//register user
// register user
app.post("/signup", async (req, res) => {
    try {
        const existingUser= await collection.findOne({username: req.body.username});

    if(existingUser){
       return res.send("User already exists,choose a different username");
    }
    else{
        const newUser = new collection({
            username: req.body.username,
            password: req.body.Password,
            email: req.body.Email
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.send("User registered successfully!");
    }
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering user.");
    }

    //check if users already exists
    
});

const port=5000;
app.listen(port,()=>{
    console.log(`Server running on Port: ${port}`);
})