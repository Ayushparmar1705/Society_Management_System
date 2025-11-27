const { query } = require("../../config/dbConfig");

const blockModel = {
  addBlock: async (data,callback) => {
    const sql = "INSERT INTO Addblock(sid , block_name) VALUES(?,?)";
    const [result] = await query(sql, [data.society_id, data.block_name],callback);
    return result;
  },

  uniqueName: async (name,callback) => {
    const sql = "SELECT * FROM Addblock WHERE block_name = ?";
    const [rows] = await query(sql, [name],callback);
    return rows;
  },

  getFlatsName: async (callback) => {
    const sql = "SELECT sid, society_name FROM Addsociety WHERE is_active = 1";
    const [rows] = await query(sql,callback);
    return rows;
  },

  getBlock: async (callback) => {
    const sql = `
      SELECT * FROM Addblock b
      INNER JOIN Addsociety s ON b.sid = s.sid
    `;
    const [rows] = await query(sql,callback);
    return rows;
  }
};

module.exports = {blockModel};
