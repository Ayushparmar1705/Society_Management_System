const { query } = require("../../../config/dbConfig");
const StaffLoginModal = {
    login: (data) => {

        const sql = "SELECT * FROM staff WHERE email = ? AND phone = ?";


        return query(sql, [data.email, data.phone]);
    },

}

module.exports = { StaffLoginModal }