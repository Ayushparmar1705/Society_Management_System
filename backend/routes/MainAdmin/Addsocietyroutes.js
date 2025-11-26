const express = require("express");
const router = express.Router();
const { societyController } = require("../../controller/MainAdmin/Addsocietycontroller");
// create the routes for society management
router.post("/addsociety", societyController.Addsociety);
router.get("/getsociety/:page/:limit", societyController.getSociety);
router.get("/deletesociety/:id", societyController.deleteSociety);
router.post("/updatesociety/:id",societyController.updateSociety);
router.get("/searchsociety/:name",societyController.searchSocietyByName);
router.get("/searchbyid/:id",societyController.getSocietyById);
router.get("/activatesociety/:id",societyController.ActivateSociety);

module.exports = router;