const { query } = require("../../../config/dbConfig");
const Dashboardmodel = {
    countTotalMembers: (id) => {
        // count total residence
        const sql = "SELECT count(*) FROM users WHERE role = 'residence' WHERE uid = ?"
        return query(sql,[id]);
    },
    countTotalStaff : (id )=>{

        const sql = "SELECT count(*) FROM staff WHERE uid = ?"
        return query(sql,[id] );
    },

}
module.exports = {Dashboardmodel}