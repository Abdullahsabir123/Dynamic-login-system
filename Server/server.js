const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});

app.post("/login", async (req, res) => {
  const { email, pwd } = req.body;

  if (!email || !pwd) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // MongoDB se user find karein
    const found = await userModel.findOne({ email: email, pwd: pwd });

    if (found) {
      console.log(`User found successfully ${found}`);
      res.status(200).json(found);
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Database code starts
const mongoose = require("mongoose");
// require("dotenv").config();

const mongoString = "mongodb+srv://abdullahsabir558:abdullahsabir558@cluster0.gvfiy.mongodb.net/mongodb"

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// CRUD operations starts
// Database Schema
const userSchema = new mongoose.Schema({
  fullName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  pwd: {
    required: true,
    type: String,
  },
});

// Database Model
const userModel = new mongoose.model("students", userSchema);

// Create POST Method  Request
app.post("/reg", async (req, res) => {
  res.send(200)
  console.log("Incoming Data:", req.body);
  const { fullName, email, pwd } = req.body;

  // Validate input
  if (!fullName || !email || !pwd) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Check if user already exists in the database
    const found = await userModel.findOne({ email: email, pwd: pwd });
    if (found) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user instance
    const newUser = new userModel({
      fullName,
      email,
      pwd,
    });

    // Save user to database
    const savedUser = await newUser.save();
    console.log("User Saved Successfully:", savedUser); // Debugging ke liye
    res.status(201).json(savedUser); // Return saved user as response
  } catch (error) {
    console.log("Database Error:", error); // Debugging ke liye
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
