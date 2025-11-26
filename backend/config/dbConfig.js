// import the mysql2 package
const mysql = require("mysql2");
// create the connection to database
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    database: process.env.MYSQLDATABASE,
    password: process.env.MYSQLPASSWORD,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("database connected...");
    }
})

// export the connection 
module.exports = db;