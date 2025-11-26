// // import the mysql2 package
// const mysql = require("mysql2");
// // create the connection to database
// const dotenv = require("dotenv");
// dotenv.config();
// const db = mysql.createConnection({
//     host: process.env.MYSQLHOST,
//     database: process.env.MYSQLDATABASE,
//     password: process.env.MYSQLPASSWORD,
//     port: process.env.MYSQLPORT,
//     user: process.env.MYSQLUSER,
// })

// db.connect((err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     else {
//         console.log("database connected...");
//     }
// })

// // export the connection 
// module.exports = db;
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

let conn;

// Helper to create the pool
function createPool() {
  return process.env.MYSQL_PUBLIC_URL
    ? mysql.createPool(process.env.MYSQL_PUBLIC_URL)
    : mysql.createPool({
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

// Initialize the pool
conn = createPool();

// Handle disconnects automatically
conn.on("error", function (err) {
  console.error("Database error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Reconnecting to the database...");
    conn = createPool(); // Recreate the pool on disconnect
  } else {
    throw err;
  }
});

module.exports = conn;
