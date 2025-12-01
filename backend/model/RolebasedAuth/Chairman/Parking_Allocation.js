const { query } = require("../../../config/dbConfig");
const ParkingAllocationModel = {
    getFlats: (fid) => {
        const sql = "SELECT fid , flat_code FROM Addflats WHERE sid = ?";
        return query(sql, [fid]);
    },
    AllocateParking: (data) => {
        const sql = "INSERT INTO Allocateparking(cid , fid , parking_no , vehical_type , parking_location) VALUES (?,?,?,?,?)"
        return query(sql, [data.cid, data.flat_id, data.parking_no, data.vehical_type, data.parking_location]);

    },
    ViewAllocateParking: (id) => {
        const sql = "SELECT * FROM Allocateparking WHERE cid = ?";
        return query(sql, [id]);
    }
}
module.exports = { ParkingAllocationModel }