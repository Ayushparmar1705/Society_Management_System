const express = require("express");
const { Managevisitorconytroller } = require("../../controller/RolebasedAuth/residence/ManageVisitor");

const router = express.Router();


router.get("/view_visitor/:fid",Managevisitorconytroller.manageVisitor);
router.get("/approve/:uid",Managevisitorconytroller.approve);
module.exports = router;