const express = require("express");
const User = require("../models/userSchema");

const userRegistration = async (req, res) => {
  const { fName, lName, email, mobile, gender, status } = req.body;
  const file = req.file.filename;
  console.log(file);

  if (!fName || !lName || !email || !mobile || !gender || !status || !file) {
    res.status(400).json({ error: "All fields are requide" });
  } else {
    try {
      if (!email.includes("@" && ".")) {
        res
          .status(400)
          .json({ error: "Email not valid please enter valid email" });
      } else {
        const user = await User.findOne({ email });
        if (user) {
          res.status(400).json({ error: "User Already Exist" });
        } else {
          const userData = await new User({
            fName,
            lName,
            email,
            mobile,
            gender,
            status,
            image: file,
          });
          const davedUser = await userData.save();
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

module.exports = {
  userRegistration,
  showAllUsers,
};
