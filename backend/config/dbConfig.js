// import the mysql2 package
const mysql = require("mysql2");
// create the connection to database


const db =  mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Ayush#2004",
    database : "society",
})

db.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("database connected...");
    }
})

// export the connection 
module.exports = db;