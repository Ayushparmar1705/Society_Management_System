const { ContactModal } = require("../../model/Contact/ContactModal")

const ContactController = {
    createContact: async (req, res) => {
        const data =  req.body;
        console.log(data);
        try {
            const result = await ContactModal.createContact(data);
            if (result) {
                return res.status(200).send({ code: 200, message: "Message send to super admin" });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ code: 500, message: err });
        }
    }
}
module.exports = {ContactController}