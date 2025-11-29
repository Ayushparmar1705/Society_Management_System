const { query } = require("../../config/dbConfig");

const Usersignup = {
    getFlatcodebysocietyId: (sid, callback) => {
        const sql = "SELECT fid , flat_code FROM Addflats WHERE sid = ?";
        query(sql, [sid], callback)
    },
    Signup: (data, callback) => {
        const sql = "INSERT INTO users(sid , fid , username , email , phone , role) VALUES(?,?,?,?,?,?)";
        query(sql, [data.society_id, data.flat_id, data.username, data.email, data.phone, data.role], callback);
    },
  
}
module.exports = { Usersignup }