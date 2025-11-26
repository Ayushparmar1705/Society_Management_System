const { blockModel } = require("../../model/MainAdmin/Addblockmodel");
const blockController = {
    // create the object to add new block in db
    Addblock: async(req, res) => {
        // request by the client
        const data = req.body;
        // check unique block name
        // blockModel.uniqueName(data.name, (err, result) => {
        //     if (err) {
        //         return res.status(500).send({ code: 500, message: err });
        //     }
        //     if (result.length > 0) {
        //         return res.status(409).send({ code: 409, message: "Block name already exists" });
        //     }
        //     // add the new block if not exists in db
        //     else {
        //         blockModel.addBlock(data, (err, result) => {
        //             if (err) {
        //                 return res.status(500).send({ code: 500, message: err });
        //             }
        //             else {
        //                 if (result.length > 0) {
        //                     return res.status(409).send({ code: 409, message: "Block name is alredy exists" });
        //                 } else {
        //                     if (result.affectedRows > 0) {
        //                         return res.status(200).send({ code: 200, message: "Block added successfully" });
        //                     }
        //                 }
        //             }
        //         })


        //     }
        // })


        

        blockModel.addBlock(data, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                if (result.affectedRows > 0) {
                    return res.status(200).send({ code: 200, message: "Block added successfully" });
                }
            }
        })
    

    },
    // get the all society name from the database
    getSocietyName: (req, res) => {
        blockModel.getFlatsName((err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                return res.status(200).send({ code: 200, message: result });
            }
        })
    },
    // get all the block from db
    getBlock: (req, res) => {
        blockModel.getBlock((err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            } else {
                return res.status(200).send({ code: 200, message: result });
            }
        })
    },


}
module.exports = { blockController };