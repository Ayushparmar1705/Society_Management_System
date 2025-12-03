const { MembersManagementModal } = require("../../model/MainAdmin/MembersManagementModal");


const MemberManagementController = {
    viewMembers: async(req, res) => {
        try {
            const result = await MembersManagementModal.viewMember();
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },
    makeChairman: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await MembersManagementModal.makeChairman(id);
            if (result) {
                return res.status(200).send({ code: 500, message: "member converted into chairman" });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    }
}
module.exports = {MemberManagementController}