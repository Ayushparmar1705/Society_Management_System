const express = require("express");
const router = express.Router();
const { flatsController } = require("../../controller/MainAdmin/Addflatscontroller");
// create the routes for society management
router.post("/addflats", flatsController.Addflats);
router.get("/getflats/:page/:limit", flatsController.getFlats);
router.get("/getblockbyflatname/:id",flatsController.getBlockByFlatsName);
// router.get("/deletesociety/:id", flatsController.);
// router.get("/searchsociety/:name",societyController.searchSocietyByName);
// router.get("/searchbyid/:id",societyController.getSocietyById);
// router.get("/activatesociety/:id",societyController.ActivateSociety);
module.exports = router;