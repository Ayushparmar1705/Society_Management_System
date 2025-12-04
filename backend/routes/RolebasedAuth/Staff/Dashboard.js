const express = require("express");
const { Dashboardcontroller } = require("../../../controller/RolebasedAuth/Staff/Dashboardcontroller");
const router = express.Router();

router.get("/totalresidence/:society_id",Dashboardcontroller.totalResidence);
router.get("/totalparking/:cid",Dashboardcontroller.totalParking);
router.get("/totalvisitor/:society_id",Dashboardcontroller.totalVisitor);
module.exports = router;