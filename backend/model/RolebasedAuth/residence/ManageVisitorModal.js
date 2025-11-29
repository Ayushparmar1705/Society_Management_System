const { query } = require("../../../config/dbConfig");
 // your DB connection

const ManageVisitor = {
    // Get visitors with flat details using JOIN
    getVisitorsByFlatId: (flat_id, callback) => {
        query = 'SELECT * FROM Addvisitor WHERE sid = ?';
        db.query(sql, [flat_id], callback);
    },

    // Approve visitor example
    approveVisitor: (vid, callback) => {
        query = "UPDATE Addvisitor set is_approve = 1 WHERE visitor_id = ?"
        db.query(sql, [vid], callback);
    }
};

module.exports = ManageVisitor;
