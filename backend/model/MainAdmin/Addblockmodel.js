const conn = require("../../config/dbConfig");
const blockModel = {
    addBlock: (data, callback) => {
        
        const sql = "INSERT INTO Addblock(sid , block_name) VALUES(?,?)";
        conn.query(sql, [data.society_id, data.block_name], callback);

    },
    uniqueName: (name, callback) => {
        const sql = "SELECT * FROM Addblock WHERE block_name = ?";
        conn.query(sql, [name], callback);
    },
    getFlatsName : (callback)=>{
        const sql = "SELECT sid , society_name FROM Addsociety WHERE is_active = 1";
        conn.query(sql,callback);
    },
    getBlock: (callback) => {
        const sql = "SELECT * FROM Addblock b INNER JOIN Addsociety s ON b.sid = s.sid";
        conn.query(sql, callback);
    },
}
module.exports = { blockModel };