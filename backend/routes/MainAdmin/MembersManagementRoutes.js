const express = require("express");
const { MemberManagementController } = require("../../controller/MainAdmin/MembersManagementController");

const router = express.Router();

router.get("/viewmembers",MemberManagementController.viewMembers);
router.put("/makechairman/:id",MemberManagementController.makeChairman);

module.exports = router;