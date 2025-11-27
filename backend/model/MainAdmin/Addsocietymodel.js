const { query } = require("../../config/dbConfig");

const societyModel = {
  addSociety: async (data) => {

    console.log("society modal data = ", data);
    const current_date = new Date();
    const updated_date = new Date();
    const sql = "INSERT INTO Addsociety(society_name,state,email,phone,address,total_flats,total_blocks,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?)";


    return await query(sql, [data.name, data.state, data.email, data.phone, data.address, data.total_flats, data.total_blocks, current_date, updated_date]);
  },


  countTotal: async () => {
    const sql = "SELECT COUNT(*) as total from Addsociety";
    const result = await query(sql);
    return result[0].total;
  },

  uniqueName: async (name) => {
    const sql = "SELECT * FROM Addsociety WHERE society_name = ?";
    return await query(sql, [name]);
  },

  getSociety: async (limit, offset) => {
    const slimit = parseInt(limit);
    const soffset = parseInt(offset);
    const sql = `SELECT * FROM Addsociety LIMIT ${slimit} OFFSET ${soffset}`;
    return await query(sql);
  },


  ActivateSociety: async(id, callback) => {
    const sql = "UPDATE Addsociety SET is_active = 1 WHERE sid = ?";
    return await query(sql,[id],callback);
  },

  deleteSociety: async (id) => {
    const sql = "UPDATE Addsociety SET is_active = 0 WHERE sid = ?";
    return await query(sql, [id]);
  },
   getSocietyById: async(id, callback) => {
        const sql = "SELECT * FROM Addsociety WHERE sid = ?";
        return await query(sql, [id], callback);
    },

  updateSociety: async(id, data, callback) => {
    const sql = "UPDATE Addsociety SET society_name = ? , state = ? , email = ? , phone = ? , address = ? , total_flats = ? , total_blocks = ? WHERE sid = ?";
    return await query(sql, [data.society_name, data.state, data.email, data.phone, data.address, data.total_flats, data.total_blocks, id], callback);
  },
  searchSocietyByName:async(name,callback)=>{
    const sql = `SELECT * FROM Addsociety like %${name}%`;
    return await query(sql,[name],callback);
  }
};

module.exports = societyModel;
