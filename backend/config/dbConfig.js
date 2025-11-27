// backend/config/dbConfig.js
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

// Export a function that returns a pool
function getPool() {
  return mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

module.exports = { getPool };
