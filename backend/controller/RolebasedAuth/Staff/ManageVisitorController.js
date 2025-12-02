const { ManageVisitorModal } = require("../../../model/RolebasedAuth/Staff/ManageVisitor");

const ManageVisitorController = {
    AddVisotor: async (req, res) => {
        const data = req.body;
        console.log(data);
        try {
            const result = await ManageVisitorModal.Addvisitor(data);
            if (result) {
                return res.status(200).send({ code: 200, message: "Visitor Add succesfully" });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
        // ManageVisitorModal.Addvisitor(data, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).send({ code: 500, message: err });
        //     } else {
        //         console.log(result);
        //         return res.status(200).send({ code: 200, message: "Visitor add succesfully" });
        //     }
        // })
    },
    Managevisitor: (req, res) => {
        const society_id = req.params.society_id;
        console.log(society_id);
        const result = ManageVisitorModal.Managevisitor(society_id);
        if(result){
            return res.status(200).send({code:200,message:result});
        }
        else{
            return res.status(500).send({ code: 200, message: err });
        }
    }
}

module.exports = { ManageVisitorController }