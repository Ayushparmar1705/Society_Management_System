const express = require("express");
const { ContactController } = require("../../controller/Contact/ContactController");
const router = express.Router();

router.post("/query",ContactController.createContact);

module.exports = router