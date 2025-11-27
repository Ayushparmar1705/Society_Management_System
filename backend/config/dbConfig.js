const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
const url = require("url");
dotenv.config();

let config;
if (process.env.MYSQL_URL) {
  const dbUrl = new url.URL(process.env.MYSQL_URL);
  config = {
    host: dbUrl.hostname,
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.substring(1),
    port: dbUrl.port || 3306,
    ssl: { rejectUnauthorized: false }
  };
} else {
  config = {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT || 3306,
    ssl: { rejectUnauthorized: false }
  }
}

const pool = mysql.createPool(config);
module.exports = {pool};