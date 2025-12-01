const { Dashboardmodel } = require("../../../model/RolebasedAuth/Chairman/Dashboard")

const Dashboardcontroller = {
    // create the controller logic to count total residence
    totalResidence: async (_, res) => {
         const id = req.params.id;
        // call the countTotalMembers function from DashboardModel
        try {
            const result = await Dashboardmodel.countTotalMembers(id);
            if (result) {
                return res.status(200).send({ code: 200, message: result[0]['count(*)'] });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }

    },
    totalStaff: async (req, res) => {
        const id = req.params.id;
        // call the countTotalMembers function from DashboardModel

        try {
            const result = await Dashboardmodel.countTotalStaff(id);
            if (result) {
                return res.status(200).send({ code: 200, message: result[0]['count(*)'] });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }

    },
    parkingSlot:async(req,res)=>{
        const id = req.params.id;
        // call the countTotalMembers function from DashboardModel

        try {
            const result = await Dashboardmodel.countTotalParkingSlot(id);
            console.log(result[0]["count(*)"]);
            if (result) {
                return res.status(200).send({ code: 200, message: result[0]['count(*)'] });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }

    }
}
module.exports = { Dashboardcontroller }