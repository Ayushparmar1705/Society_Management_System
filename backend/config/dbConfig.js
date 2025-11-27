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
  ssl: { rejectUnauthorized: true }   // required for Railway public connections
});

module.exports = pool;
