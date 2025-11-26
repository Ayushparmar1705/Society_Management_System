const express = require("express");
const { memberController } = require("../../../controller/RolebasedAuth/Chairman/MemberController");
const { Managestaffcontroller } = require("../../../controller/RolebasedAuth/Chairman/ManagestaffController");

const router = express.Router();
router.get("/member/:society_name",memberController.residenceController)
router.get("/approve/:id",memberController.ApproveController)
router.post("/add-staff/:id",Managestaffcontroller.Addstaff);
router.get("/manage-staff/:id",Managestaffcontroller.Managestaff);
router.delete("/inactive-staff/:id",Managestaffcontroller.deleteStaff)
router.put("/active-staff/:id",Managestaffcontroller.ActiveStaff)
router.get("/getonestaff/:id",Managestaffcontroller.getOneStaff);
router.post("/update-staff/:id",Managestaffcontroller.updateStaff);

module.exports = router