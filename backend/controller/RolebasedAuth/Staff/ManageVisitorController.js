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
            console.log(err);
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
    Managevisitor: async(req, res) => {
        const society_id = req.params.sid;
   
        const result = await ManageVisitorModal.Managevisitor(society_id);
        console.log(result);
        if(result){
            return res.status(200).send({code:200,message:result});
        }
        else{
            return res.status(500).send({ code: 200, message: err });
        }
    }
}

module.exports = { ManageVisitorController }