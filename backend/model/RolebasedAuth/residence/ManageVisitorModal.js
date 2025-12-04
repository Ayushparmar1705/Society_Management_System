const { query } = require("../../../config/dbConfig");
 // your DB connection

const ManageVisitormodal = {
    // Get visitors with flat details using JOIN
    getVisitorsByFlatId: (society_id,flat_id) => {
        sql = 'SELECT * FROM Addvisitor AS av INNER JOIN Addflats AS af ON av.flat_id = af.flat_id  WHERE av.society_id = ? AND av.flat_id = ?';
        return query(sql, [society_id,flat_id]);
    },

    // Approve visitor example
    approveVisitor: (vid) => {
        sql = "UPDATE Addvisitor set is_approve = 1 WHERE visitor_id = ?"
        return query(sql, [vid]);
    }
};

module.exports = {ManageVisitormodal};
