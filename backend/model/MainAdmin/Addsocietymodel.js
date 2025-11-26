const conn = require("../../config/dbConfig");
const societyModel = {
    addSociety: (data, callback) => {
        console.log("society data = ", data);
        const sql = "INSERT INTO Addsociety(society_name , state , email , phone , address , total_flats , total_blocks) VALUES(?,?,?,?,?,?,?)";
        conn.query(sql, [data.name, data.state, data.email, data.phone, data.address, data.total_flats, data.total_blocks], callback);

    },
    uniqueName: (name, callback) => {
        const sql = "SELECT * FROM Addsociety WHERE society_name = ?";
        conn.query(sql, [name], callback);
    },
    getSociety: (limit, offset, callback) => {
        const sql = "SELECT * FROM Addsociety LIMIT ? OFFSET ?";
        conn.query(sql, [parseInt(limit), parseInt(offset)], callback);
    },
    deleteSociety: (id, callback) => {
        const sql = "UPDATE Addsociety SET is_active = 0 WHERE sid = ?";
        conn.query(sql, [id], callback);
    },
    searchSocietyByName: (name, callback) => {
        const sql = "SELECT * FROM Addsociety WHERE society_name LIKE ?";
        conn.query(sql, ['%' + name + '%'], callback);
    },
    getSocietyById: (id, callback) => {
        const sql = "SELECT * FROM Addsociety WHERE sid = ?";
        conn.query(sql, [id], callback);
    },
    ActivateSociety: (id, callback) => {
        const sql = "UPDATE Addsociety SET is_active = 1 WHERE sid = ?";
        conn.query(sql, [id], callback);
    },
    countTotal: (callback) => {
        const countSql = "SELECT COUNT(*) AS total FROM Addsociety";
        conn.query(countSql,callback);
    },
    updateSociety : (id , data , callback)=>{
        const sql = "UPDATE Addsociety SET society_name = ? , state = ? , email = ? , phone = ? , address = ? , total_flats = ? , total_blocks = ? WHERE sid = ?";
        conn.query(sql,[data.society_name, data.state, data.email, data.phone, data.address, data.total_flats, data.total_blocks , id],callback);
    }

}
module.exports = { societyModel };