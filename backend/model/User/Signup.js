const conn = require("../../config/dbConfig");
const Usersignup = {
    getFlatcodebysocietyId: (sid, callback) => {
        const sql = "SELECT fid , flat_code FROM Addflats WHERE sid = ?";
        conn.query(sql, [sid], callback)
    },
    Signup: (data, callback) => {
        const sql = "INSERT INTO users(sid , fid , username , email , phone , role) VALUES(?,?,?,?,?,?)";
        conn.query(sql, [data.society_id, data.flat_id, data.username, data.email, data.phone, data.role], callback);
    },
  
}
module.exports = { Usersignup }