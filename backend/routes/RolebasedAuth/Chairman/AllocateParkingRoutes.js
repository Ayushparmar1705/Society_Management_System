const { ParkingAllocationController } = require("../../../controller/RolebasedAuth/Chairman/Parking_Allocation");
const express = require("express");
const router = express.Router();
router.post("/allocateparking", ParkingAllocationController.AllocateParking);
router.get("/getflatsnumber/:id",ParkingAllocationController.getFlats);
router.get("/viewallocateparking/:id",ParkingAllocationController.viewAllocateParking);

module.exports = router