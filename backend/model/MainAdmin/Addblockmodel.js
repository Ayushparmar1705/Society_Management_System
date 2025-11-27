const conn = require("../../config/dbConfig"); // promise pool

const blockModel = {
  addBlock: async (data) => {
    const sql = "INSERT INTO Addblock(sid , block_name) VALUES(?,?)";
    const [result] = await conn.query(sql, [data.society_id, data.block_name]);
    return result;
  },

  uniqueName: async (name) => {
    const sql = "SELECT * FROM Addblock WHERE block_name = ?";
    const [rows] = await conn.query(sql, [name]);
    return rows;
  },

  getFlatsName: async () => {
    const sql = "SELECT sid, society_name FROM Addsociety WHERE is_active = 1";
    const [rows] = await conn.query(sql);
    return rows;
  },

  getBlock: async () => {
    const sql = `
      SELECT * FROM Addblock b
      INNER JOIN Addsociety s ON b.sid = s.sid
    `;
    const [rows] = await conn.query(sql);
    return rows;
  }
};

module.exports = blockModel;
