const { query } = require("../../config/dbConfig");

const MembersManagementModal = {
    viewMember: () => {
        const sql = "SELECT * FROM users";
        return query(sql);
    },
    makeChairman:(id)=>{
        const sql = "UPDATE users SET role = 'chairman' AND is_active = 1 WHERE uid = ?";
        return query(sql,[id]);
    }
}
module.exports = {MembersManagementModal}