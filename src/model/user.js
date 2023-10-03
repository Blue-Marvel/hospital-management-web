const { string } = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  patient_id: { type: mongoose.Types.ObjectId },
  First_Name: {
    type: String,
    required: [true, "please enter first name "],
    maxLength: 50,
  },
  Middle_Name: {
    type: String,
    maxLength: 50,
  },
  Last_Name: {
    type: String,
    required: [true, "please enter last name "],
    maxLength: 50,
  },
  Email: {
    type: String,
    required: [true, "please enter email "],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  Phone: {
    type: String,
    required: [true, "please provide phone number "],
  },
  Sex: {
    type: String,
    enum: {
      values: ["male", "female"],
    },
  },
  Role: {
    type: String,
    enum: {
      values: ["patient", "doctor"],
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  appointment_date: {
    type: Date,
    required: [true, "enter date "],
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.First_Name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFECYCLE,
    }
  );
};
userSchema.methods.comparePassword = async function (enteredPassword) {
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  return isMatch;
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
