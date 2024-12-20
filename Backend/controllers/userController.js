const { default: mongoose } = require("mongoose");

const User = require("../models/userModel");

const loginUser = async (req, res) => {
  res.status(200).json({ mssg: "user login" });
};

const signupUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const user = await User.signup({ userName, email, password });

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  //   res.status(200).json({ mssg: "message" });
};

module.exports = {
  loginUser,
  signupUser,
};
