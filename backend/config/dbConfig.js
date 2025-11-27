const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

let pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const db = pool.promise();

// Ping database every 30s to prevent idle disconnect
setInterval(async () => {
  try {
    await db.query("SELECT 1");
  } catch (err) {
    console.error("Ping error:", err);
  }
}, 30000);

module.exports = db;
