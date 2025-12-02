const { blockModel } = require("../../model/MainAdmin/Addblockmodel");

const blockController = {

    // Add new block
    Addblock: async (req, res) => {
        try {
            const data = req.body;

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
            console.log("result of the society name = ", result);
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
    },

    inActiveblock: async (req, res) => {
        const bid = req.params.bid;
        try {
            const result = await blockModel.inactive_block(bid);
            console.log("result of in active block = ", result);
            return res.status(200).send({ code: 200, message: "Block inactive succesfully" });
        } catch (err) {
            return res.status(500).send({ code: 500, message: err });
        }
    },
    Activeblock: async (req, res) => {
        const bid = req.params.bid;
        try {
            const result = await blockModel.active_block(bid);
            return res.status(200).send({ code: 200, message: "Block Active succesfully" });
        } catch (error) {
            return res.status(500).send({ code: 500, message: error });
        }
    }

};

module.exports = { blockController };
