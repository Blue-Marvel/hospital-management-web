const express = require("express");
const router = express.Router();
const { login, register, logout, getDoctors } = require("../controller/auth");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").get(logout);
router.route("/fetchDoctors").get(getDoctors);

module.exports = router;
