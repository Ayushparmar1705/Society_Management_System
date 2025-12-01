const { Managestaffmodel } = require("../../../model/RolebasedAuth/Chairman/ManageStaffModel");

const Managestaffcontroller = {
    Addstaff: async (req, res) => {
        const data = req.body;
        const id = req.params.id;
        console.log("id = ", id);
        const result = await Managestaffmodel.Addstaff(id, data);
        if (result) {
            return res.status(200).send({ code: 200, message: "staff add succesfully" })
        }
    },
    Managestaff: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Managestaffmodel.Managestaff(id);
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },
    deleteStaff: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Managestaffmodel.DeleteStaff(id);
            if (result) {
                return res.status(200).send({ code: 200, message: "Staff in Active succesfully" });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }


    },
    ActiveStaff: async (req, res) => {
        const id = req.params.id;
        const result = await Managestaffmodel.ActiveStaff(id);
        try {
            if (result) {
                return res.status(200).send({ code: 200, message: "Staff activate succesfully" });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },
    getOneStaff: async (req, res) => {
        const id = req.params.id
        try {
            const result = await Managestaffmodel.getOneStaff(id);
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },
    updateStaff: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await Managestaffmodel.updateStaff(id,data);
            if (result) {
                return res.status(200).send({ code: 200, message: "Staff updated succesfully" });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    }
}

module.exports = { Managestaffcontroller }