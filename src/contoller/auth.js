const User = require("../model/user");
const { UnauthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      firstName: user.First_Name,
      lastName: user.Last_Name,
      email: user.Email,
    },
    token,
  });
};
const login = async (req, res) => {};

module.exports = { login, register };
