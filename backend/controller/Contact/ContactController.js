const { ContactModal } = require("../../model/Contact/ContactModal")

const ContactController = {
    createContact: async (req, res) => {
        try {
            const data = req.body;
            const result = await ContactModal.createContact(data);

            if (result && result.affectedRows > 0) {

                const notificationdata = {
                    id: result.insertId,
                    ...data,
                    created_at: new Date(),
                };

                // Emit notification
                global.io.emit("new_notification", notificationdata);

                return res.status(200).send({
                    code: 200,
                    message: "Message sent to super admin",
                    data: notificationdata
                });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ code: 500, message: err });
        }
    }
};

module.exports = { ContactController };
