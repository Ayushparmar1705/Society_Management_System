const { query } = require("../../config/dbConfig");

const blockModel = {
  addBlock: async (data) => {

    console.log(data);
    const sql = "INSERT INTO Addblock(sid , block_name) VALUES(?,?)";

    const result = await query(sql, [data.society_id, data.block_name]);
    return result;
  },

  uniqueName: async (name) => {
    const sql = "SELECT * FROM Addblock WHERE block_name = ?";
    // use the rows not [rows] any anywhere which is any variable because [] return first index
    const rows = await query(sql, [name]);
    return rows;
  },

  getFlatsName: async () => {
    const sql = "SELECT sid, society_name FROM Addsociety WHERE is_active = 1";
    const rows = await query(sql);
    return rows;
  },

  getBlock: async () => {
    const sql = `
      SELECT b.bid,b.block_name,b.created_at,b.updated_at,b.email,b.is_active,b.phone,s.sid,s.society_name,s.total_flats,s.total_blocks FROM Addblock b INNER JOIN Addsociety s ON b.sid = s.sid`;
    const rows = await query(sql);
    console.log("rows for the get block = ",rows);
    return rows;
  },
  inactive_block:async(bid)=>{
    const sql = "UPDATE Addblock SET is_active = 0 WHERE bid = ?";
    const rows = await query(sql,[bid]);
    return rows;
  }
};

module.exports = {blockModel};
