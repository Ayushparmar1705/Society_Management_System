const { ManageVisitorModal } = require("../../../model/RolebasedAuth/Staff/ManageVisitor");

const ManageVisitorController = {
    AddVisotor: (req, res) => {
        const data = req.body;
        console.log(data);
        ManageVisitorModal.Addvisitor(data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ code: 500, message: err });
            } else {
                console.log(result);
                return res.status(200).send({ code: 200, message: "Visitor add succesfully" });
            }
        })
    },
    Managevisitor: (req, res) => {
        const id = req.params.id;
        console.log(id);
        ManageVisitorModal.Managevisitor(id, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                return res.status(200).send({ code: 200, message: result });
            }
        })
    }
}

module.exports = { ManageVisitorController }