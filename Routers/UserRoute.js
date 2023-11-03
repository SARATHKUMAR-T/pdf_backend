import express from "express";
import { User } from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const userRouter = express.Router();

// Login Route
userRouter.post("/login", async (req, res) => {
  try {
    // checking for valid user
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).json({ message: "user doesn't exist" });
    }
    // valid users only allowed for password verification
    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validatePassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    } else {
      // after password validation token will be provided in the response
      const token = jwt.sign({ id: user._id }, process.env.SECRET);
      return res
        .status(200)
        .json({ message: "User Logged In  Successfully", token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error", error });
  }
});

// Signup Route
userRouter.post("/signup", async (req, res) => {
  try {
    // checking for already exsisting user
    const oldUser = await User.findOne({ email: req.body.email });
    if (oldUser) {
      return res.status(400).json({ message: "User Already Exists!" });
    }
    //  paddword encryption
    else {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const newUser = await new User({
        ...req.body,
        password: hashedPassword,
      }).save();
      const token = jwt.sign({ id: newUser._id }, process.env.SECRET);
      return res
        .status(200)
        .json({ message: "New User Created Successfully", token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error", error });
  }
});
