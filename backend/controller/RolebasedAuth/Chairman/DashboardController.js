const { Dashboardmodel } = require("../../../model/RolebasedAuth/Chairman/Dashboard")

const Dashboardcontroller = {
    // create the controller logic to count total residence
    totalResidence: (_, res) => {
        // call the countTotalMembers function from DashboardModel
        Dashboardmodel.countTotalMembers((err, result) => {

            if (err) {
                return res.status(500).send({ code: 500, message: err })
            } else {

                return res.status(200).send({ code: 200, message: result[0]['count(*)'] });
            }
        })
    },
    totalStaff: (req, res) => {
        const id = req.params.id;
        // call the countTotalMembers function from DashboardModel
        Dashboardmodel.countTotalStaff(id , (err, result) => {

            if (err) {
                return res.status(500).send({ code: 500, message: err })
            } else {
                console.log(result);
                return res.status(200).send({ code: 200, message: result[0]['count(*)'] });
            }
        })
    }
}
module.exports = { Dashboardcontroller }