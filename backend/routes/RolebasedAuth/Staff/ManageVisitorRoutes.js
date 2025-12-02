const express = require("express");
const { ManageVisitorController } = require("../../../controller/RolebasedAuth/Staff/ManageVisitorController");
const router = express.Router();

router.post("/add-visitor",ManageVisitorController.AddVisotor);
router.get("/get-visitor/:sid",ManageVisitorController.Managevisitor);

module.exports =  router