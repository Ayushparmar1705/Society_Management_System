const {ManageVisitormodal} = require("../../../model/RolebasedAuth/residence/ManageVisitorModal")

const Managevisitorconytroller = {
    manageVisitor: async (req, res) => {
        const society_id = req.params.sid;
        const flat_id = req.params.fid;
        try {
            const result = await ManageVisitormodal.getVisitorsByFlatId(society_id,flat_id);
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ code: 500, message: err });
        }
    },
    approve: async (req, res) => {
        const vid = req.params.uid;
        try {
            const result = await ManageVisitormodal.approveVisitor(vid);
            if (result) {
                return res.status(200).send({ code: 200, message: "Member approve succesfully" });
            }

        } catch (err) {
            return res.status(200).send({ code: 200, message: err });
        }
    }
}

module.exports = { Managevisitorconytroller }