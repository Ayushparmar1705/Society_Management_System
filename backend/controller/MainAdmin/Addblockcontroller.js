const { blockModel } = require("../../model/MainAdmin/Addblockmodel");

const blockController = {

    // Add new block
    Addblock: async (req, res) => {
        try {
            const data = req.body;

            // Check unique block name
            const exists = await blockModel.uniqueName(data.block_name);
            if (exists.length > 0) {
                return res.status(409).send({ code: 409, message: "Block name already exists" });
            }

            // Insert
            const result = await blockModel.addBlock(data);

            if (result.affectedRows > 0) {
                return res.status(200).send({ code: 200, message: "Block added successfully" });
            }

            return res.status(500).send({ code: 500, message: "Failed to add block" });

        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },

    // Get societies
    getSocietyName: async (req, res) => {
        try {
            const result = await blockModel.getFlatsName();
            console.log("result of the society name = ",result);
            return res.status(200).send({ code: 200, message: result });
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },

    // Get blocks
    getBlock: async (req, res) => {
        try {
            const result = await blockModel.getBlock();
            return res.status(200).send({ code: 200, message: result });
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    }
};

module.exports = { blockController };
