// import the mysql2 package
const mysql = require("mysql2");
// create the connection to database

dotenv.config();
const db = mysql.createConnection({
    MYSQLHOST: process.env.MYSQLHOST,
    MYSQLDATABASE: process.env.MYSQLDATABASE,
    MYSQLPASSWORD: process.env.MYSQLPASSWORD,
    MYSQLPORT: process.env.MYSQLPORT,
    MYSQLUSER: process.env.MYSQLUSER,
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