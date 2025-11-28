const { flatsModel } = require("../../model/MainAdmin/Addflatsmodel");
const flatsController = {
    // create the object to add new block in db
    Addflats: async (req, res) => {
        // request by the client
        const data = req.body;
        console.log(data);



        flatsModel.getBlocksById(data.bid, async (err, result) => {
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
            const result1 = await flatsModel.addFlats(newdata);
            try {
                res.status(200).send({ code: 200, message: result1 });
            } catch (err) {
                res.status(500).send({ code: 500, message: err });
            }
        })



    },
    // get the all society name from the database
    getSocietyName: async (req, res) => {
        const result = await flatsModel.getSocietyName();
        try {
            res.status(200).send({ code: 200, message: result });
        } catch (err) {
            res.status(500).send({ code: 500, message: err });
        }
    },
    // get all the block from db
    getBlock: async (req, res) => {
        const result = await flatsModel.getBlocks();
        try {
            res.status(200).send({ code: 200, message: result });
        } catch (err) {
            res.status(500).send({ code: 500, message: err });
        }
    },
    getFlats: async (req, res) => {
        const page = req.params.page;
        const limit = req.params.limit;
        const offset = (page - 1) * limit;
        flatsModel.countTotal(async (err, result) => {
            if (err) {
                return res.status(500).send({ code: 500, message: err });
            }
            else {
                const total = result[0].total;
                const totalPages = Math.ceil(total / limit);
                const result = await flatsModel.getFlats(limit, offset);
                try {
                    res.status(200).send({ code: 200, message: result });
                } catch (err) {
                    res.status(500).send({ code: 500, message: err });
                }
            }
        })

    },
    getBlockByFlatsName: async (req, res) => {
        const id = req.params.id;
        const result = await flatsModel.getBlockByFlatsId(id);
        try {
            res.status(200).send({ code: 200, message: result });
        } catch (err) {
            res.status(500).send({ code: 500, message: err });
        }
    }


}
module.exports = { flatsController };