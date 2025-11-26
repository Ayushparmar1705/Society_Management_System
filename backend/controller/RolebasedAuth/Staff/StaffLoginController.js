
const { StaffLoginModal } = require("../../../model/RolebasedAuth/Staff/ManageStaff");
const jwt = require("jsonwebtoken");


const StaffLoginController = {
    login: (req, res) => {
        const data = req.body;

        StaffLoginModal.login(data, (err, result) => {
            if (err) {
                console.error(err); // better logging
                return res.status(500).send({ code: 500, message: "Internal server error" });
            }
            console.log(result);
            if (result.length > 0) {
                const secret = "securityJwt";
                const token = jwt.sign(
                    { id: result[0].sid, cid: result[0].cid },
                    secret,
                    { expiresIn: "1h" } // more reasonable expiration
                );

                return res.status(200).send({
                    code: 200,
                    token,
                    cid: result[0].cid,   // <--- add this
                    
                });
            } else {
                return res.status(404).send({ code: 404, message: "No user found" });
            }
        });
    },
}
module.exports = { StaffLoginController }