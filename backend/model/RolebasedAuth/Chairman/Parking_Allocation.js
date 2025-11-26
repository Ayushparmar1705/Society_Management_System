const conn = require("../../../config/dbConfig");
const ParkingAllocationModel = {
    getFlats : (fid , callback)=>{
        const sql = "SELECT fid , flat_code FROM Addflats WHERE sid = ?";
        conn.query(sql,[fid],callback);
    },
    AllocateParking : (data , callback)=>{
        const sql = "INSERT INTO Allocateparking(cid , fid , parking_no , vehical_type , parking_location) VALUES (?,?,?,?,?)"
        conn.query(sql,[data.cid , data.flat_id , data.parking_no , data.vehical_type , data.parking_location],callback);
        
    },
    ViewAllocateParking : (id, callback)=>{
        const sql = "SELECT * FROM Allocateparking WHERE cid = ?";
        conn.query(sql,[id],callback);
    }
}
module.exports = {ParkingAllocationModel}