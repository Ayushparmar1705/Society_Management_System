const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

// Create the pool
const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  connectTimeout: 30000, // 30s - avoids timeouts on slow networks

  // Railway requires SSL but does NOT require certificates
  ssl: {
    rejectUnauthorized: false
  }
});

// ----------- ROBUST QUERY FUNCTION WITH RETRIES -----------
async function query(sql, params, retries = 3, delay = 500) {
  let connection;

  try {
    connection = await pool.getConnection();
    const [rows] = await connection.execute(sql, params);
    return rows;

  } catch (err) {
    console.error("DB ERROR:", err.code, err.message);

    // Retry only for recoverable errors
    const retriableErrors = [
      "PROTOCOL_CONNECTION_LOST",
      "ECONNRESET",
      "ETIMEDOUT",
      "EPIPE",
      "ENETUNREACH"
    ];

    if (retriableErrors.includes(err.code) && retries > 0) {
      console.warn(`⚠️ Connection issue (${err.code}) — retrying in ${delay}ms... (${retries} retries left)`);

      await new Promise(res => setTimeout(res, delay));

      return query(sql, params, retries - 1, delay * 2); // Exponential backoff
    }

    throw err; // Non-recoverable error
  }

  finally {
    if (connection) connection.release();
  }
}

module.exports = { pool, query };
