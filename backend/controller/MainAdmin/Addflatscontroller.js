const { flatsModel } = require("../../model/MainAdmin/Addflatsmodel");
const flatsController = {
    // create the object to add new block in db
    Addflats: async (req, res) => {
        try {
            const data = req.body;
            console.log("Request Data:", data);

            // Get block by ID
            const blockResultArr = await flatsModel.getBlocksById(data.bid);
            if (!blockResultArr || blockResultArr.length === 0) {
                return res.status(404).json({ code: 404, message: "Block not found" });
            }

            const blockName = blockResultArr[0].block_name;
            console.log("Block Name:", blockName);

            // Prepare new flat data
            const newdata = {
                sid: data.sid,
                bid: data.bid,
                flat_number: data.flat_number,
                floor_number: data.floor_number,
                flat_type: data.flat_type,
                flat_price: data.flat_price,
                flat_area: data.flat_area,
                balcony_area: data.balcony_area,
                flat_code: `${blockName} - ${data.flat_number}`
            };

            // Add flat
            const result1 = await flatsModel.addFlats(newdata);
            console.log("Insert Result:", result1);

            res.status(200).json({ code: 200, message: "Flat added successfully", data: result1 });

        } catch (err) {
            console.error("Error in Addflats:", err);
            res.status(500).json({ code: 500, message: err.message });
        }
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
        const countTotal = flatsModel.countTotal();
        const total = countTotal[0].total;
        const totalPages = Math.ceil(total / limit);
        const result = await flatsModel.getFlats(limit, offset);
        try {
            res.status(200).send({ code: 200, message: result, totalPages: totalPages, page: page, limit: limit, total: total });
        } catch (err) {
            res.status(500).send({ code: 500, message: err });
        }

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