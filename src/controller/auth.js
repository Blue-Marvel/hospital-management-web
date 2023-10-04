const User = require("../model/user");
const { UnauthenticatedError, BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

// const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      firstName: user.First_Name,
      lastName: user.Last_Name,
      email: user.Email,
      role: user.Role,
      // userId: user.patient_id,
    },
    token,
  });
};
const login = async (req, res) => {
  const { Email, password } = req.body;
  if (!Email || !password) {
    throw new BadRequestError("please provide email and password ");
  }

  const user = await User.findOne({ Email });
  if (!user) {
    throw new UnauthenticatedError("invalid credentials");
  }

  const passwordVerification = await user.comparePassword(password);
  if (!passwordVerification) {
    throw new UnauthenticatedError("invalid credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      firstName: user.First_Name,
      lastName: user.Last_Name,
      email: user.Email,
      userId: user._id,
    },
    token,
  });
};

const logout = (req, res) => {
  //check if session exists
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        logger.error("error destroying session", err);
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "logout failed" });
      }

      //test with postman
      //  else {
      //   // res.status(StatusCodes.OK).json({ msg: "logout successful" });
      //   const response = {
      //     msg: "logout successful",
      //     redirect: "/login",
      //   };
      //   res.json({ response });
      // }
    });
  } else {
    //delete if it does not work
    // res.status(StatusCodes.OK).json({ msg: "logout successful" });
    const response = {
      msg: "logout successful",
      redirect: "/login",
    };
    res.json({ response });
  }

  // else {
  //   res.status(StatusCodes.OK).json({ msg: "logout successful" });
  // }
};

module.exports = { login, register, logout };
