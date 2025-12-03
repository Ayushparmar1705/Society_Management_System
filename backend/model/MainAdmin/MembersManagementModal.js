const { query } = require("../../config/dbConfig");

const MembersManagementModal = {
    viewMember: () => {
        const sql = "SELECT u.username,u.email,u.phone,u.role,s.society_nam,f.flat_code FROM users AS u INNER JOIN Addsociety AS s ON u.sid = s.sid INNER JOIN Addflats AS f ON u.fid = f.fid";
        return query(sql);
    },
    makeChairman: (id) => {
        const sql = "UPDATE users SET role = 'chairman' AND is_approve = 1 WHERE uid = ?";
        return query(sql, [id]);
    }
}
module.exports = { MembersManagementModal }