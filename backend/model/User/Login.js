const { query } = require("../../config/dbConfig");

const Userlogin = {
    login: (data, callback) => {
     
        const sql = "SELECT * FROM users u INNER JOIN Addsociety asco ON u.sid = asco.sid WHERE u.email = ?";
        query(sql, [data], callback);
    },
 
}

module.exports = {Userlogin}