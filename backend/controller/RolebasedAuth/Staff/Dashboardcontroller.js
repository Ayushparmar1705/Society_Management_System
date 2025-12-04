const { DashboardManagement } = require("../../../model/RolebasedAuth/Staff/Dashboard");

const Dashboardcontroller = {
    // create the controller logic to count total residence
    totalResidence: async (req, res) => {
        const id = req.params.society_id;

        // call the countTotalMembers function from DashboardModel
        try {
            const result = await DashboardManagement.getTotalMembers(id);

      
            if (result) {



                return res.status(200).send({ code: 200, message: result[0]['totalMembers'] });


            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ code: 500, message: err });
        }

    },
    totalParking: async (req, res) => {
        const id = req.params.cid;
        // call the countTotalMembers function from DashboardModel

        try {
            const result = await DashboardManagement.getTotalParking(id);
            if (result) {
                return res.status(200).send({ code: 200, message: result[0]['totalparking'] });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }

    },
    totalVisitor: async (req, res) => {
        const id = req.params.society_id;
        // call the countTotalMembers function from DashboardModel

        try {
            const result = await DashboardManagement.getTotalVisitor(id);
            
            if (result) {
                return res.status(200).send({ code: 200, message: result[0]['totalvisitor'] });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }

    }
}
module.exports = { Dashboardcontroller }