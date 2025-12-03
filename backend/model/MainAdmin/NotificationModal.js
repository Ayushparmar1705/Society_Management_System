const { query } = require("../../config/dbConfig");

export default  Notificationmodel = {
    getNotification: () => {
        const sql = "SELECT * FROM Contact";
        return query(sql);
    }
}

module.exports = {Notificationmodel}