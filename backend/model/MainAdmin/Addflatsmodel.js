const conn = require("../../config/dbConfig");
const flatsModel = {
    addFlats: (data, callback) => {
        const flatCode = data.block
        const sql = "INSERT INTO Addflats(sid , bid , flat_number , floor_number , flat_type , flat_price , flat_area , balcony_area , flat_code) VALUES(?,?,?,?,?,?,?,?,?)";
        conn.query(sql, [data.sid , data.bid , data.flat_number , data.floor_number , data.flat_type , data.flat_price , data.flat_area , data.balcony_area , data.flat_code], callback);

    },
    checkUniqueCode: (name, callback) => {
        const sql = "SELECT * FROM Addflats WHERE flat_number = ? AND floor_number = ?";
        conn.query(sql, [name], callback);
    },
    getFlatsName : (callback)=>{
        const sql = "SELECT sid , society_name FROM Addsociety WHERE is_active = 1";
        conn.query(sql,callback);
    },
    getBlockByFlatsId : (sid , callback)=>{
        const sql = "SELECT * from Addblock WHERE sid = ?";
        conn.query(sql , [sid] , callback);
    },
    getBlocksById : (bid , callback)=>{
        const sql = "SELECT * FROM Addblock WHERE bid = ?";
        conn.query(sql ,[bid] , callback);
    },
    getBlocks : (callback)=>{
        const sql = "SELECT * FROM Addblock WHERE is_active = 1";
        conn.query(sql,callback);
    },
    getFlats: (limit , offset , callback) => {
            const sql = "SELECT a.fid , a.sid , a.bid  , a.floor_number , a.flat_type , a.flat_code , a.is_active , s.society_name , s.total_flats , s.total_blocks , s.is_active  FROM Addflats a LEFT JOIN Addblock b ON a.bid = b.bid LEFT JOIN Addsociety s ON a.sid = s.sid LIMIT ? OFFSET ?";
        // SELECT * FROM Addflats a INNER JOIN Addblock b ON a.bid = b.bid INNER JOIN Addsociety s ON a.sid = s.sid LIMIT ? OFFSET ?
      
        conn.query(sql, [parseInt(limit) , parseInt(offset)] , callback);
    },
    countTotal: (callback) => {
        const countSql = "SELECT COUNT(*) AS total FROM Addflats";
        conn.query(countSql,callback);
    }
}
module.exports = { flatsModel };