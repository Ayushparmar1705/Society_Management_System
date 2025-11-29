const { query } = require("../../config/dbConfig");

const Userlogin = {
    login: (data) => {

        const sql = "SELECT * FROM users u INNER JOIN Addsociety asco ON u.sid = asco.sid WHERE u.email = ?";
        return query(sql, [data]);
    },

}

module.exports = { Userlogin }