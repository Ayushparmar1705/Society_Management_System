const express = require("express");
const router = express.Router();
const { SignupController } = require("../../controller/User/Signupcontroller");
// create the routes for society management
router.get("/getflatcodebysocietyid/:id", SignupController.getFlatsCodeBySocietyId);
router.post("/signup",SignupController.SignupUser);
module.exports = router;