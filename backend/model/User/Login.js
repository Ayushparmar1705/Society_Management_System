const conn = require("../../config/dbConfig");
const Userlogin = {
    login: (data, callback) => {
     
        const sql = "SELECT * FROM users u INNER JOIN Addsociety asco ON u.sid = asco.sid WHERE u.email = ?";
        conn.query(sql, [data], callback);
    },
 
}

module.exports = {Userlogin}