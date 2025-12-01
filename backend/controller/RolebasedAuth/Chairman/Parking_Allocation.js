const { ParkingAllocationModel } = require("../../../model/RolebasedAuth/Chairman/Parking_Allocation");

const ParkingAllocationController = {
    getFlats: async (req, res) => {
        const fid = req.params.id;
        try {
            const result = await ParkingAllocationModel.getFlats(fid);
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            } else {

            }
            // ParkingAllocationModel.getFlats(fid, (err, result) => {
            //     if (err) {
            //         return res.status(500).send({ code: 500, message: err });
            //     }
            //     else {

            //         return res.status(200).send({ code: 200, message: result });
            //     }
            // })
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },
    AllocateParking: async (req, res) => {
        const data = req.body;
        try {
            const result = await ParkingAllocationModel.AllocateParking(data);
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            }
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
        // ParkingAllocationModel.AllocateParking(data, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).send({ code: 500, message: err })
        //     }
        //     else {
        //         return res.status(200).send({ code: 200, message: result })
        //     }
        // })
    },
    viewAllocateParking: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await ParkingAllocationModel.ViewAllocateParking(id);
            if (result) {
                return res.status(200).send({ code: 200, message: result });
            }
        }
        catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    }
}

module.exports = { ParkingAllocationController }