const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
  ssl: { rejectUnauthorized: true },
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Robust query function
async function query(sql, params) {
  let connection;
  try {
    connection = await pool.getConnection();        // Get a fresh connection
    const [rows] = await connection.execute(sql, params);
    return rows;
  } catch (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.warn('Connection lost. Retrying...');
      return query(sql, params); // retry
    }
    throw err;
  } finally {
    if (connection) connection.release();           // Always release connection back to pool
  }
}

module.exports = { pool, query };
