const {query} = require("../../../config/dbConfig");
const DashboardManagement = {
    getTotalParking: async(cid)=>{
        const sql = "SELECT COUNT(*) AS totalparking FROM Allocateparking WHERE cid = ?";
        return query(sql,[cid]);
    },
    getTotalMembers: async (society_id) => {
        const sql = "SELECT COUNT(*) AS totalMembers FROM users WHERE role = 'member'  AND sid = ?";
        return query(sql,[society_id]);
    },
    getTotalVisitor: async(society_id)=>{
        const sql = "SELECT COUNT(*) AS totalvisitor FROM Addvisitor WHERE society_id = ?";
        return query(sql,[society_id]);
    }
}
module.exports = { DashboardManagement }