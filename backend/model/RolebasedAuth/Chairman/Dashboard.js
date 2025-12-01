const { query } = require("../../../config/dbConfig");
const Dashboardmodel = {
    countTotalMembers: (id) => {
        // count total residence
        const sql = "SELECT count(*) FROM users WHERE role = 'residence' WHERE sid = ?"
        return query(sql,[id]);
    },
    countTotalStaff : (id )=>{

        const sql = "SELECT count(*) FROM staff WHERE cid = ?"
        return query(sql,[id]);
    },
    countTotalParkingSlot:(id)=>{
        const sql = "SELECT COUNT(*) FROM Allocateparking WHERE cid = ?"
        return query(sql,[id]);
    }

}
module.exports = {Dashboardmodel}