const express = require("express");
const { ContactController } = require("../../controller/Contact/ContactController");
const { MemberManagementController } = require("../../controller/MainAdmin/MembersManagementController");
const router = express.Router();

router.post("/query",MemberManagementController.viewMembers);


module.exports = router