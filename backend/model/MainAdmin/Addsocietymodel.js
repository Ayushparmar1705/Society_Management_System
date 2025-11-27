const {pool} = require("../../config/dbConfig");

// const societyModel = {
//   addSociety: async (data) => {
//     const conn = await pool.getConnection(); // get a connection from the pool
//     try {
//       const sql = `
//         INSERT INTO Addsociety 
//         (society_name, state, email, phone, address, total_flats, total_blocks, created_at, updated_at) 
//         VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
//       `;
//       const [result] = await conn.query(sql, [
//         data.society_name,
//         data.state,
//         data.email,
//         data.phone,
//         data.address,
//         data.total_flats,
//         data.total_blocks,
//       ]);
//       return result;  
//     } finally {
//       conn.release(); // always release connection
//     }
//   },

//   uniqueName: async (name) => {
//     const conn = await pool.getConnection();
//     try {
//       const sql = "SELECT * FROM Addsociety WHERE society_name = ?";
//       const [rows] = await conn.query(sql, [name]);
//       return rows;
//     } finally {
//       conn.release();
//     }
//   },

//   getSociety: async (limit, offset) => {
//     const conn = await pool.getConnection();
//     try {
//       const sql = "SELECT * FROM Addsociety LIMIT ? OFFSET ?";
//       const [rows] = await conn.query(sql, [parseInt(limit), parseInt(offset)]);
//       return rows;
//     } finally {
//       conn.release();
//     }
//   },

//   deleteSociety: async (id) => {
//     const conn = await pool.getConnection();
//     try {
//       const sql = "UPDATE Addsociety SET is_active = 0 WHERE sid = ?";
//       const [result] = await conn.query(sql, [id]);
//       return result;
//     } finally {
//       conn.release();
//     }
//   },

//   // repeat same pattern for all other methods...
// };

// module.exports = societyModel;

const query = require("../../config/dbConfig");  // Use safe query wrapper

const societyModel = {
  addSociety: async (data) => {
    const sql = `
      INSERT INTO Addsociety 
      (society_name, state, email, phone, address, total_flats, total_blocks, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;

    return await query(sql, [
      data.society_name,
      data.state,
      data.email,
      data.phone,
      data.address,
      data.total_flats,
      data.total_blocks,
    ]);
  },

  uniqueName: async (name) => {
    const sql = "SELECT * FROM Addsociety WHERE society_name = ?";
    return await query(sql, [name]);
  },

  getSociety: async (limit, offset) => {
    const sql = "SELECT * FROM Addsociety LIMIT ? OFFSET ?";
    return await query(sql, [parseInt(limit), parseInt(offset)]);
  },

  deleteSociety: async (id) => {
    const sql = "UPDATE Addsociety SET is_active = 0 WHERE sid = ?";
    return await query(sql, [id]);
  },
};

module.exports = societyModel;
