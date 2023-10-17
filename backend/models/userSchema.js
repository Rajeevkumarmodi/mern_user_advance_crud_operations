const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
      trime: true,
    },
    lName: {
      type: String,
      required: true,
      trime: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trime: true,
    },
    mobile: {
      type: Number,
      required: true,
      trime: true,
      mimlength: 10,
      maxlength: 10,
    },
    gender: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
