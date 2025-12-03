const { query } = require("../../config/dbConfig");


const Notificationmodel = {
    getNotification: () => {
        const sql = "SELECT * FROM Contact";
        return query(sql);
    }
}

module.exports = { Notificationmodel }