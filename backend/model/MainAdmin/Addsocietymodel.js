const { getPool } = require("../../config/dbConfig");

const societyModel = {
  addSociety: async (data) => {
    const pool = await getPool();
    const sql = `
      INSERT INTO Addsociety 
      (society_name, state, email, phone, address, total_flats, total_blocks, created_at, updated_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;
    const [result] = await pool.query(sql, [
      data.society_name,
      data.state,
      data.email,
      data.phone,
      data.address,
      data.total_flats,
      data.total_blocks,
    ]);
    return result;
  },

  uniqueName: async (name) => {
    const pool = await getPool();
    const sql = "SELECT * FROM Addsociety WHERE society_name = ?";
    const [rows] = await pool.query(sql, [name]);
    return rows;
  },

  getSociety: async (limit, offset) => {
    const pool = await getPool();
    const sql = "SELECT * FROM Addsociety LIMIT ? OFFSET ?";
    const [rows] = await pool.query(sql, [parseInt(limit), parseInt(offset)]);
    return rows;
  },

  deleteSociety: async (id) => {
    const pool = await getPool();
    const sql = "UPDATE Addsociety SET is_active = 0 WHERE sid = ?";
    const [result] = await pool.query(sql, [id]);
    return result;
  },

  ActivateSociety: async (id) => {
    const pool = await getPool();
    const sql = "UPDATE Addsociety SET is_active = 1 WHERE sid = ?";
    const [result] = await pool.query(sql, [id]);
    return result;
  },

  searchSocietyByName: async (name) => {
    const pool = await getPool();
    const sql = "SELECT * FROM Addsociety WHERE society_name LIKE ?";
    const [rows] = await pool.query(sql, [`%${name}%`]);
    return rows;
  },

  getSocietyById: async (id) => {
    const pool = await getPool();
    const sql = "SELECT * FROM Addsociety WHERE sid = ?";
    const [rows] = await pool.query(sql, [id]);
    return rows;
  },

  countTotal: async () => {
    const pool = await getPool();
    const sql = "SELECT COUNT(*) AS total FROM Addsociety";
    const [rows] = await pool.query(sql);
    return rows[0].total;
  },

  updateSociety: async (id, data) => {
    const pool = await getPool();
    const sql = `
      UPDATE Addsociety 
      SET society_name = ?, state = ?, email = ?, phone = ?, address = ?, total_flats = ?, total_blocks = ?, updated_at = NOW() 
      WHERE sid = ?
    `;
    const [result] = await pool.query(sql, [
      data.society_name,
      data.state,
      data.email,
      data.phone,
      data.address,
      data.total_flats,
      data.total_blocks,
      id,
    ]);
    return result;
  },
};

module.exports = societyModel;
