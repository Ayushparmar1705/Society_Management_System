const conn = require("../../../config/dbConfig");
const StaffLoginModal = {
    login: (data, callback) => {

        const sql = "SELECT * FROM staff WHERE email = ? AND phone = ?";


        conn.query(sql, [data.email, data.phone], callback);
    },

}

module.exports = { StaffLoginModal }