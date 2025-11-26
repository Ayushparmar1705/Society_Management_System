const express = require("express");
const { StaffLoginController } = require("../../../controller/RolebasedAuth/Staff/StaffLoginController");
const router = express.Router();

router.post("/security-login",StaffLoginController.login);
module.exports = router;