
const { StaffLoginModal } = require("../../../model/RolebasedAuth/Staff/ManageStaff");
const jwt = require("jsonwebtoken");


const StaffLoginController = {
    login: async (req, res) => {
        const data = req.body;
        try {
            const result = await StaffLoginModal.login(data);
            console.log("Staff login data = ",result);
            if (result.length > 0) {
                const secret = "securityJWT";
                const token = jwt.sign({ id: result[0].sid , cid:result[0].cid}, secret, { expiresIn: "1h" });
                return res.send({ code: 200, token: token });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },
}
module.exports = { StaffLoginController }