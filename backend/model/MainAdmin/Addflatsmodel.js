const { query } = require("../../config/dbConfig");

const flatsModel = {
    addFlats: (data) => {

        const sql = "INSERT INTO Addflats(sid , bid , flat_number , floor_number , flat_type , flat_price , flat_area , balcony_area , flat_code) VALUES(?,?,?,?,?,?,?,?,?)";
        return query(sql, [data.sid, data.bid, data.flat_number, data.floor_number, data.flat_type, data.flat_price, data.flat_area, data.balcony_area, data.flat_code]);

    },
    checkUniqueCode: (name) => {
        const sql = "SELECT * FROM Addflats WHERE flat_number = ? AND floor_number = ?";
        return query(sql, [name]);
    },
    getSocietyName: () => {
        const sql = "SELECT sid , society_name FROM Addsociety WHERE is_active = 1";
        return query(sql);
    },
    getBlockByFlatsId: (sid) => {
        const sql = "SELECT * from Addblock WHERE sid = ?";
        return query(sql, [sid]);
    },
    getBlocksById: (bid) => {
        const sql = "SELECT * FROM Addblock WHERE bid = ?";
        return query(sql, [bid]);
    },
    getBlocks: () => {

        const sql = "SELECT * FROM Addblock WHERE is_active = 1";
        return query(sql);
    },
    getFlats: (limit, offset) => {
        const sql = "SELECT a.fid , a.sid , a.bid  , a.floor_number , a.flat_type , a.flat_code , a.is_active , s.society_name , s.total_flats , s.total_blocks , s.is_active  FROM Addflats a LEFT JOIN Addblock b ON a.bid = b.bid LEFT JOIN Addsociety s ON a.sid = s.sid LIMIT ? OFFSET ?";
        // SELECT * FROM Addflats a INNER JOIN Addblock b ON a.bid = b.bid INNER JOIN Addsociety s ON a.sid = s.sid LIMIT ? OFFSET ?

        return query(sql, [parseInt(limit), parseInt(offset)]);
    },
    countTotal: () => {
        const countSql = "SELECT COUNT(*) AS total FROM Addflats";
        return query(countSql);
    }
}
module.exports = { flatsModel }