const { societyModel } = require("../../model/MainAdmin/Addsocietymodel");
const societyController = {
    // create the object to add new society in db
    Addsociety: (req, res) => {
        // request by the client
        const data = req.body;
        console.log(data);
        // check unique society name
        societyModel.uniqueName(data.name, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            if (result.length > 0) {
                return res.status(409).send({ code: 409, message: "Society name already exists" });
            }
            // add the new society if not exists in db
            else {
                societyModel.addSociety(data, (err, result) => {
                    if (err) {
                        return res.status(500).send({ code: 500, message: err });
                    }
                    else {
                        if (result.length > 0) {
                            return res.status(409).send({ code: 409, message: "Society name already exists" });
                        } else {
                            if (result.affectedRows > 0) {
                                return res.status(200).send({ code: 200, message: "Society added successfully" });
                            }
                        }
                    }
                })


            }
        })
    },

    // get all the society from db
    getSociety: (req, res) => {
        const page = req.params.page;
        const limit = req.params.limit;
        const offset = (page - 1) * limit;

        societyModel.countTotal((err,result)=>{
            if(err){
                return res.status(500).send({code : 500 , message : err});
            }
            const total = result[0].total;
            const totalPages = Math.ceil(total / limit);
            societyModel.getSociety(limit , offset , (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            } else {
                return res.status(200).send({ code: 200, message: result , total : total , page : page , totalPages : totalPages});
            }
        })
        })

        
    },

    // remove the society from db;
    deleteSociety: ((req, res) => {
        const id = req.params.id;
        console.log(id);
        societyModel.deleteSociety(id, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                return res.status(200).send({ code: 200, message: "Society deleted successfully" });
            }
        });
    }),
    // search the society by character wise
    searchSocietyByName: (req, res) => {
        const name = req.params.name;
        societyModel.searchSocietyByName(name, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            } else {
                return res.status(200).send({ code: 200, message: result });
            }
        })
    },
    // search the society by id for the updation
    getSocietyById: (req, res) => {
        const id = req.params.id;
        societyModel.getSocietyById(id, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            } else {
                return res.status(200).send({ code: 200, message: result });
            }
        })
    },
    ActivateSociety : (req,res)=>{
        const id = req.params.id;
        societyModel.ActivateSociety(id,(err,result)=>{
            if(err){
                return res.status(500).send({code : 500 , message : err});
            }else{
                return res.status(200).send({code : 200 , message : "Society Activate succesfully"});
            }
        })
    },
    updateSociety : (req,res)=>{
        const id = req.params.id;
        const data = req.body;
        console.log(data)
        societyModel.updateSociety(id , data , (err,result)=>{
            if(err){
                return res.status(500).send({code : 500 , message : err});
            }else{
                return res.status(200).send({code : 200 , message : "Society update succesfully"});
            }
        })
    }
}
module.exports = { societyController };