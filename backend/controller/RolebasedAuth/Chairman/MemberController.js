const { memberManagement } = require("../../../model/RolebasedAuth/Chairman/memberManagement");

const memberController = {
    // create the controller logic for manage the residence
    residenceController: (req, res) => {
        const society_name = req.params.society_name;
        
        
        try {
            
            memberManagement.residenceManagement(society_name, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({ code: 500, message: err })
                }
                else {
                    console.log(result);
                    return res.status(200).send({ code: 200, message: result });
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    },
    // create the controller logic for approve  the member
    ApproveController: (req, res) => {
        const id = req.params.id;
        try {
            // call the Approve method from the model
            memberManagement.Approve(id, (err, result) => {
                if (err) {
                    return res.status(500).send({ code: 500, message: err })
                } else {
                    if (result) {
                        return res.status(200).send({ code: 200, message: "Member Approve succesfully" });
                    }
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

}
module.exports = { memberController }