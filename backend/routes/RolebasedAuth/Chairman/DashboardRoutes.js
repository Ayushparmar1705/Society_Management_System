const express = require("express");
const { Dashboardcontroller } = require("../../../controller/RolebasedAuth/Chairman/DashboardController");
const router = express.Router();

router.get("/totalresidence/:id",Dashboardcontroller.totalResidence)
router.get("/totalstaff/:id",Dashboardcontroller.totalStaff)
module.exports = router