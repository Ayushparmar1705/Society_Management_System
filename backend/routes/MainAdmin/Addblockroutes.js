const express = require("express");
const router = express.Router();
const { blockController } = require("../../controller/MainAdmin/Addblockcontroller");
// create the routes for society management
router.get("/getsocietyname",blockController.getSocietyName);
router.post("/addblock", blockController.Addblock);
router.get("/getblock", blockController.getBlock);


module.exports = router;