// backend/config/dbConfig.js
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

// Create a single pool (safe for Render/Railway)
const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // optional but recommended for Railway
  connectTimeout: 10000,
});

module.exports = pool;
