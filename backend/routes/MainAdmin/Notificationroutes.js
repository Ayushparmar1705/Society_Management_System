const express = require("express");
const { NotificationController } = require("../../controller/MainAdmin/Notificationcontroller");
const router = express.Router();


router.get("/notification",NotificationController.getNotification);

module.exports = router;