const { Usersignup } = require("../../model/User/Signup");
const SignupController = {
    getFlatsCodeBySocietyId: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Usersignup.getFlatcodebysocietyId(id);
            return res.status(200).send({ code: 200, message: result });
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }

    },
    SignupUser: async (req, res) => {
        const data = req.body;
        console.log(data);
        try {
            const result = await Usersignup.Signup(data);
            return res.status(200).send({ code: 200, message: "User account created succesfully" });
        } catch (err) {
            console.log(err);
        }

    },

}

module.exports = { SignupController }