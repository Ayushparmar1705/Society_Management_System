const { query } = require("../../../config/dbConfig");

const Managestaffmodel = {
    Addstaff: (cid, data, callback) => {
        const sql = "INSERT INTO staff(cid , name , email , phone , role) VALUES(?,?,?,?,?)"
        return query(sql, [cid, data.name, data.email, data.phone, data.role], callback);
    },
    Managestaff: (id) => {
        const sql = "SELECT * FROM staff WHERE cid = ?";
        return query(sql, [id]);
    },
    DeleteStaff: (id, callback) => {

        const sql = "UPDATE staff SET is_active = 0 WHERE sid = ?"
        return query(sql, [id], callback);
    },
    ActiveStaff: (id, callback) => {

        const sql = "UPDATE staff SET is_active = 1 WHERE sid = ?"
        return query(sql, [id], callback);
    },
    getOneStaff: (id, callback) => {
        const sql = "SELECT * FROM staff WHERE sid = ?";
        return query(sql, [id], callback);
    },
    updateStaff : (id , data , callback)=>{
        const sql = "UPDATE staff SET name = ? , email = ? , phone = ? , role = ? WHERE sid = ?";
        return query(sql,[data.name , data.email , data.phone , data.role , id],callback);
    }
}
module.exports = { Managestaffmodel }