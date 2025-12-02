const { query } = require("../../../config/dbConfig");

const ManageVisitorModal = {
    Addvisitor: (data) => {
        const sql = "INSERT INTO Addvisitor(sid , society_id , flat_id , visitor_name, visitor_phone) VALUES (?,?, ?, ?,?)";
        const params = [data.staff_id, data.society_id, parseInt(data.flat_code), data.visitor_name, data.visitor_phone];
        return query(sql, params);
    },
    Managevisitor: (society_id) => {
        const sql = "SELECT * FROM Addvisitor as av INNER JOIN Addflats as af ON av.flat_id = as.fid WHERE society=?";
        return query(sql, [society_id]);
    }
};

module.exports = { ManageVisitorModal };
