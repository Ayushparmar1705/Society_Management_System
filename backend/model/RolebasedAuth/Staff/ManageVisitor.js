const { query } = require("../../../config/dbConfig");

const ManageVisitorModal = {
    Addvisitor: (data, callback) => {
        const sql = "INSERT INTO Addvisitor(sid , visitor_name, visitor_phone, flat_code) VALUES (?,?, ?, ?)";
        const params = [data.staff_id , data.visitor_name, data.visitor_phone, parseInt(data.flat_code)];
        return query(sql, params, callback);
    },
    Managevisitor: (id, callback) => {
        const sql = "SELECT * FROM Addvisitor WHERE sid = ?";
        console.log(id);
        return query(sql, [id], callback);
    }
};

module.exports = { ManageVisitorModal };
