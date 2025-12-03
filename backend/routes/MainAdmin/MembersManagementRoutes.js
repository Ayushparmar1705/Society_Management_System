const express = require("express");
const { MemberManagementController } = require("../../controller/MainAdmin/MembersManagementController");

const router = express.Router();

router.get("/viewmembers",MemberManagementController.viewMembers);
router.put("/makechairman/:id",MemberManagementController.makeChairman);
router.get("/searchmember/:name",MemberManagementController.searchMember);
module.exports = router;