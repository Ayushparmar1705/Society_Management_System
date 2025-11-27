const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const url = require("url");

dotenv.config();

// Parse MYSQL_URL
if (!process.env.MYSQL_URL) {
  throw new Error("MYSQL_URL is not defined in .env");
}

const dbUrl = new url.URL(process.env.MYSQL_URL);

const pool = mysql.createPool({
  host: dbUrl.hostname,             // containers-us-west-123.railway.app
  user: dbUrl.username,             // root
  password: dbUrl.password,         // your password
  database: dbUrl.pathname.slice(1),// removes leading "/"
  port: dbUrl.port || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 30000,            // 30s connection timeout
  ssl: { rejectUnauthorized: false }, // Railway requires SSL
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Robust query wrapper with retry
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
      console.warn(`⚠️ DB connection lost (${err.code}). Retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay));
      return query(sql, params, retries - 1, delay * 2);
    }

    throw err;
  } finally {
    if (connection) connection.release();
  }
}

module.exports = { pool, query };
