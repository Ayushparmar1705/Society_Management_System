const { query } = require("../../../config/dbConfig");

const ManageVisitorModal = {
    Addvisitor: (data) => {
        const sql = "INSERT INTO Addvisitor(sid , society_id , flat_id , visitor_name, visitor_phone, flat_code) VALUES (?,?, ?, ?,?,?)";
        const params = [data.staff_id, data.society_id, data.visitor_name, data.visitor_phone, parseInt(data.flat_code)];
        return query(sql, params);
    },
    Managevisitor: (society_id) => {
        const sql = "SELECT * FROM Addvisitor WHERE society_id = ?";
        return query(sql, [society_id]);
    }
};

module.exports = { ManageVisitorModal };
