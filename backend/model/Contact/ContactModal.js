const { query } = require("../../config/dbConfig");

const ContactModal = {
    createContact: (data) => {
        const sql = "INSERT INTO Contact(name,email,society_name,address,purpose,message) VALUES(?,?,?,?,?,?)";
        return query(sql, [data.name, data.email, data.societyName, data.address, data.purpose, data.message])
    }
}
module.exports = {ContactModal}