const { ContactModal } = require("../../model/Contact/ContactModal")

const ContactController = {
    createContact: async (req, res) => {
        const data = await req.body;
        try {
            const result = await ContactModal.createContact(data);
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ code: 500, message: err });
        }
    }
}
module.exports = {ContactController}