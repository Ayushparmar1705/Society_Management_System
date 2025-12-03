const { Notificationmodel } = require("../../model/MainAdmin/NotificationModal");

const NotificationController = {
    getNotification: async (req, res) => {
        try {
            const result = await Notificationmodel.getNotification();
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ code: 500, message: err });
        }
    }
}

module.exports = {NotificationController}