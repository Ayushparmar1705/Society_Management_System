// import the mysql2 package
const mysql = require("mysql2");
// create the connection to database


const db = mysql.createConnection({
    MYSQLHOST: mysql.railway.internal,
    MYSQLDATABASE: railway,
    MYSQLPASSWORD: tPpctPBwUrtpIMiKxtKJOxifAIfBMiXC,
    MYSQLPORT: 3306,
    MYSQLUSER: root,
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