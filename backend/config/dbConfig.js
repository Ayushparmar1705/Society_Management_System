const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const url = require("url");

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in .env");
}

const dbUrl = new url.URL(process.env.DATABASE_URL);

// Build MySQL pool
const pool = mysql.createPool({
  host: dbUrl.hostname,             
  user: dbUrl.username,             
  password: dbUrl.password,         
  database: dbUrl.pathname.slice(1),
  port: dbUrl.port || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 30000,
  ssl: { rejectUnauthorized: false }, 
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Query wrapper with retry
async function query(sql, params, retries = 3, delay = 500) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.execute(sql, params);
    return rows;
  } catch (err) {
    const retriableErrors = [
      "PROTOCOL_CONNECTION_LOST",
      "ECONNRESET",
      "ETIMEDOUT",
      "EPIPE",
      "ENETUNREACH"
    ];

    if (retriableErrors.includes(err.code) && retries > 0) {
      console.warn(`⚠️ DB error (${err.code}). Retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay));
      return query(sql, params, retries - 1, delay * 2);
    }

    throw err;
  } finally {
    if (connection) connection.release();
  }
}

module.exports = { pool, query };
