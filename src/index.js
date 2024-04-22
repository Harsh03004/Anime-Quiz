const express = require('express');
const pasth = require('path');
const bcrypt = require('bcrypt');
const { rename } = require('fs');
const collection = require("./config");

const app = express();

//convert data to json
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// use ejs as a view engine//
app.set('view engine', 'ejs');

//static folder path
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login-signup");
});

// register user
app.post("/signup", async (req, res) => {
    try {
        const existingUser = await collection.findOne({ username: req.body.username });

        if (existingUser) {
            return res.send("User already exists,choose a different username");
        }
        else {
            const newUser = new collection({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            }

            );

            // Save the new user to the database
            const savedUser = await newUser.save();
            console.log(savedUser);
            res.render("login-signup");

            
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering user.");
    }

    //check if users already exists

});

//Login user
// Login user
app.post("/login", async (req, res) => {
    try {
        const user = await collection.findOne({ username: req.body.username, password: req.body.password });
        if (!user) {
            return res.send("Invalid username or password");
        } else {
            // Update the user's score here if needed
            const updatedUser = await collection.findOneAndUpdate(
                { username: req.body.username },
                { $inc: { score: 10 } }, // Increment score by 10 (or any other value)
                { new: true } // Return the updated document
            );
            // You can also return the updated user document if needed
            return res.render("home", { user: updatedUser });
        }
    } catch {
        return res.status(500).send("Error logging in");
    }
});
app.post("/quiz", async (req, res) => {
    try {
        const { username, correctAnswers } = req.body;
        const user = await collection.findOne({ username: username });
        if (user) {
            // Calculate the score based on the number of correct answers
            const scoreIncrease = correctAnswers * 5;
            // Increment the user's score
            user.score += scoreIncrease;
            // Save the updated score to the database
            await user.save();
            return res.send("Score updated successfully");
        } else {
            return res.status(404).send("User not found");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error updating score");
    }
});
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})