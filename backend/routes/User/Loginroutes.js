const express = require("express");
const { loginController } = require("../../controller/User/Logincontroller");
const router = express.Router();
router.post("/login",loginController.loginUser)
router.post("/verify-otp",loginController.verifyOTP)
module.exports = router