const { ParkingAllocationModel } = require("../../../model/RolebasedAuth/Chairman/Parking_Allocation");

const ParkingAllocationController = {
    getFlats: (req, res) => {
        const fid = req.params.id;
        ParkingAllocationModel.getFlats(fid, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {

                return res.status(200).send({ code: 200, message: result });
            }
        })
    },
    AllocateParking: (req, res) => {
        const data = req.body;
        ParkingAllocationModel.AllocateParking(data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ code: 500, message: err })
            }
            else {
                return res.status(200).send({ code: 200, message: result })
            }
        })
    },
    viewAllocateParking: (req, res) => {
        const id = req.params.id;
        console.log(id)
        ParkingAllocationModel.ViewAllocateParking(id, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 200, message: err });
            }
            else {
                console.log(result)
                return res.status(200).send({ code: 200, message: result });
            }
        })
    }
}

module.exports = { ParkingAllocationController }