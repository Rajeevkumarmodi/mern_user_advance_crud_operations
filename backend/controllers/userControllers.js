const express = require("express");
const User = require("../models/userSchema");

const userRegistration = async (req, res) => {
  const { fName, lName, email, mobile, gender, status } = req.body;
  console.log(req.body);
  // console.log(req.file);
  const file = req.file.filename;

  if (!fName || !lName || !email || !mobile || !gender || !status || !file) {
    res.status(400).json({ error: "All fields are requide" });
  } else {
    try {
      if (!email.includes("@" && ".")) {
        res
          .status(400)
          .json({ error: "Email not valid please enter valid email" });
      } else {
        const user = await User.findOne({ email: email });
        if (user) {
          res.status(400).json({ error: "User Already Exist" });
        } else {
          const userData = new User({
            fName,
            lName,
            email,
            mobile,
            gender,
            status,
            image: file,
          });
          console.log(userData);
          const adedUser = await userData.save();
          res.status(200).json({ success: userData });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};

// show all users

const showAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

// get single user
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      res.status(400).json({ error: "User not found" });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

// delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = User.findOne({ _id: id });
    if (!user) {
      res.status(400).json({ error: "User not found" });
    } else {
      const deleteUser = await User.deleteOne({ _id: id });

      res.status(200).json(deleteUser);
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = {
  userRegistration,
  showAllUsers,
  getSingleUser,
  deleteUser,
};
