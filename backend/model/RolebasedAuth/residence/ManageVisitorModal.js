const { query } = require("../../../config/dbConfig");
 // your DB connection

const ManageVisitormodal = {
    // Get visitors with flat details using JOIN
    getVisitorsByFlatId: (society_id,flat_id) => {
        query = 'SELECT * FROM Addvisitor WHERE sid = ? AND flat_id = ?';
        return db.query(sql, [society_id,flat_id]);
    },

    // Approve visitor example
    approveVisitor: (vid) => {
        query = "UPDATE Addvisitor set is_approve = 1 WHERE visitor_id = ?"
        return db.query(sql, [vid]);
    }
};

module.exports = {ManageVisitormodal};
