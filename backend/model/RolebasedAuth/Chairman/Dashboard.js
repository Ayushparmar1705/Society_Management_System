const conn = require("../../../config/dbConfig")
const Dashboardmodel = {
    countTotalMembers: (callback) => {
        // count total residence
        const sql = "SELECT count(*) FROM users WHERE role = 'residence'"
        conn.query(sql,callback);
    },
    countTotalStaff : (id , callback)=>{
        console.log(id);
        const sql = "SELECT count(*) FROM staff WHERE cid = ?"
        conn.query(sql,[id] , callback);
    },

}
module.exports = {Dashboardmodel}