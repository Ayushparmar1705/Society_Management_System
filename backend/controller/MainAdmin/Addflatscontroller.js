const { flatsModel } = require("../../model/MainAdmin/Addflatsmodel");
const flatsController = {
    // create the object to add new block in db
    Addflats: (req, res) => {
        // request by the client
        const data = req.body;
        console.log(data);



        flatsModel.getBlocksById(data.bid, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            const blockResult = result[0]["block_name"];
            const newdata = {
                "sid": data.sid,
                "bid": data.bid,
                "flat_number": data.flat_number,
                "floor_number": data.floor_number,
                "flat_type": data.flat_type,
                "flat_price": data.flat_price,
                "flat_area": data.flat_area,
                "balcony_area": data.balcony_area,
                "flat_code": blockResult + " - " + data.flat_number,
            }
            console.log("final sending the data in mysql = ", newdata);
            flatsModel.addFlats(newdata, (err, result) => {
                if (err) {
                    return res.status(500).send({ code: 500, message: err });
                }
                else {
                    if (result.affectedRows > 0) {
                        return res.status(200).send({ code: 200, message: "Flat added successfully" });
                    }
                }
            })
        })



    },
    // get the all society name from the database
    getSocietyName: (req, res) => {
        flatsModel.getFlatsName((err, result) => {
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
        flatsModel.getBlocks((err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            } else {
                return res.status(200).send({ code: 200, message: result });
            }
        })
    },
    getFlats: (req, res) => {
        const page = req.params.page;
        const limit = req.params.limit;
        const offset = (page - 1) * limit;
        flatsModel.countTotal((err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                const total = result[0].total;
                const totalPages = Math.ceil(total / limit);
                flatsModel.getFlats(limit, offset, (err, result) => {
                    if (err) {
                        return res.status(500).send({ code: 500, message: err });
                    } else {
                        return res.status(200).send({ code: 200, message: result, totalPages: totalPages, total: total });
                    }
                })
            }
        })

    },
    getBlockByFlatsName: (req, res) => {
        const id = req.params.id;
        flatsModel.getBlockByFlatsId(id, (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                return res.status(200).send({ code: 200, message: result });
            }
        });
    }


}
module.exports = { flatsController };