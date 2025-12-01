const { query } = require("../../../config/dbConfig");

const Managestaffmodel = {
    Addstaff: (cid, data) => {
        const sql = "INSERT INTO staff(cid , fullname , email , phone , role) VALUES(?,?,?,?,?)"
        return query(sql, [cid, data.name, data.email, data.phone, data.role]);
    },
    Managestaff: (id) => {
        const sql = "SELECT * FROM staff WHERE cid = ?";
        return query(sql, [id]);
    },
    DeleteStaff: (id) => {

        const sql = "UPDATE staff SET is_active = 0 WHERE sid = ?"
        return query(sql, [id]);
    },
    ActiveStaff: (id) => {

        const sql = "UPDATE staff SET is_active = 1 WHERE sid = ?"
        return query(sql, [id]);
    },
    getOneStaff: (id) => {
        const sql = "SELECT * FROM staff WHERE sid = ?";
        return query(sql, [id]);
    },
    updateStaff : (id , data )=>{
        const sql = "UPDATE staff SET name = ? , email = ? , phone = ? , role = ? WHERE sid = ?";
        return query(sql,[data.name , data.email , data.phone , data.role , id]);
    }
}
module.exports = { Managestaffmodel }