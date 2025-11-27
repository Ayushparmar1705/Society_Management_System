const { query } = require("../../config/dbConfig");

const societyModel = {
  addSociety: async (data) => {

    console.log("society modal data = ",data);
    const current_date = new Date();
    const updated_date = new Date();
    const sql = "INSERT INTO Addsociety(society_name,state,email,phone,address,total_flats,total_blocks,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?)";
    

    return await query(sql, [data.name,data.state,data.email,data.phone,data.address,data.total_flats,data.total_blocks,current_date,updated_date]);
  },


  countTotal : async()=>{
    const sql = "SELECT COUNT(Addsociety) from Addsociety";
    return await query(sql);
  },

  uniqueName: async (name) => {
    const sql = "SELECT * FROM Addsociety WHERE society_name = ?";
    return await query(sql, [name]);
  },

  getSociety: async (limit, offset) => {
    const sql = "SELECT * FROM Addsociety LIMIT ? OFFSET ?";
    return await query(sql, [parseInt(limit), parseInt(offset)]);
  },

  deleteSociety: async (id) => {
    const sql = "UPDATE Addsociety SET is_active = 0 WHERE sid = ?";
    return await query(sql, [id]);
  },
};

module.exports = societyModel;
