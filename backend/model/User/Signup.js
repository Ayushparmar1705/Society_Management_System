const { query } = require("../../config/dbConfig");

const Usersignup = {
    getFlatcodebysocietyId: (sid) => {
        const sql = "SELECT fid , flat_code FROM Addflats WHERE sid = ?";
        return query(sql, [sid])
    },
    Signup: (data) => {
        const sql = "INSERT INTO users(sid , fid , username , email , phone , role) VALUES(?,?,?,?,?,?)";
        return query(sql, [data.society_id, data.flat_id, data.username, data.email, data.phone, data.role]);
    },
  
}
module.exports = { Usersignup }