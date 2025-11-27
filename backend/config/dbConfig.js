const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,        // yamabiko.proxy.rlwy.net
  user: process.env.MYSQLUSER,        // root
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
  ssl: { rejectUnauthorized: true },
  enableKeepAlive: true,               // keeps connection alive
  keepAliveInitialDelay: 0             // optional, send ping immediately
});

// Safe query helper that retries if connection lost
async function query(sql, params) {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.warn('Connection lost, retrying query...');
      return query(sql, params);  // retry once
    }
    throw err;
  }
}

module.exports = { pool, query };
