const { Managestaffmodel } = require("../../../model/RolebasedAuth/Chairman/ManageStaffModel");

const Managestaffcontroller = {
    Addstaff: (req, res) => {
        const data = req.body;
        const id = req.params.id;
        Managestaffmodel.Addstaff(id, data, (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(500).send({ code: 409, message: "Email Alredy Exists" });
                }
                else {

                    return res.status(500).send({ code: 500, message: err });
                }
            }
            else {
                console.log(result);
                return res.status(200).send({ code: 200, message: "Staff Add succesfully", result });
            }
        })
    },
    Managestaff: (req, res) => {
        const id = req.params.id;
        Managestaffmodel.Managestaff(id, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                return res.status(200).send({ code: 200, message: result });
            }
        })
    },
    deleteStaff: (req, res) => {
        const id = req.params.id;
        Managestaffmodel.DeleteStaff(id, (err, _) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                return res.status(200).send({ code: 200, message: "Staff inactive succesfully" });
            }
        })

    },
    ActiveStaff: (req, res) => {
        const id = req.params.id;
        Managestaffmodel.ActiveStaff(id, (err, _) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                return res.status(200).send({ code: 200, message: "Staff Active succesfully" });
            }
        })

    },
    getOneStaff: (req, res) => {
        const id = req.params.id
        Managestaffmodel.getOneStaff(id, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            } else {
                return res.status(200).send({ code: 200, message: result })
            }
        })
    },
    updateStaff: (req, res) => {
        const id = req.params.id;
        const data = req.body;
        Managestaffmodel.updateStaff(id, data, (err, _) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ code: 500, message: err });
            } else {
                return res.status(200).send({ code: 200, message: "Staff Updated succesfully" });
            }
        })
    }
}

module.exports = { Managestaffcontroller }