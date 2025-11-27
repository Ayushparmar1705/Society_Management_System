const societyModel = require("../../model/MainAdmin/Addsocietymodel");

const societyController = {
    // Add new society
    Addsociety: async (req, res) => {
        try {
            const data = req.body;
           
            console.log("Add society controller = ",data);
            // Check if society name is unique
            const existing = await societyModel.uniqueName(data.name);
            if (existing.length > 0) {
                return res.status(409).json({ code: 409, message: "Society name already exists" });
            }

            // Add new society
            const result = await societyModel.addSociety(data);
            if (result.affectedRows > 0) {
                return res.status(200).json({ code: 200, message: "Society added successfully" });
            } else {
                return res.status(500).json({ code: 500, message: "Failed to add society" });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ code: 500, message: err.message });
        }
    },

    // Get societies with pagination
    getSociety: async (req, res) => {
        try {
            const page = parseInt(req.params.page) || 1;
            const limit = parseInt(req.params.limit) || 10;
            const offset = (page - 1) * limit;

            const total = await societyModel.countTotal();
            const totalPages = Math.ceil(total / limit);
            const result = await societyModel.getSociety(limit, offset);

            return res.status(200).json({
                code: 200,
                message: result,
                total,
                page,
                totalPages,
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ code: 500, message: err.message });
        }
    },

    // Delete society (soft delete)
    deleteSociety: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await societyModel.deleteSociety(id);
            return res.status(200).json({ code: 200, message: "Society deleted successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ code: 500, message: err.message });
        }
    },

    // Activate society
    ActivateSociety: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await societyModel.ActivateSociety(id);
            return res.status(200).json({ code: 200, message: "Society activated successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ code: 500, message: err.message });
        }
    },

    // Search society by name
    searchSocietyByName: async (req, res) => {
        try {
            const name = req.params.name;
            console.log(name);
            const result = await societyModel.searchSocietyByName(name);
            console.log("My result for society search = ",result);
            return res.status(200).json({ code: 200, message: result });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ code: 500, message: err.message });
        }
    },

    // Get society by id
    getSocietyById: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await societyModel.getSocietyById(id);
            return res.status(200).json({ code: 200, message: result });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ code: 500, message: err.message });
        }
    },

    // Update society
    updateSociety: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const result = await societyModel.updateSociety(id, data);
            return res.status(200).json({ code: 200, message: "Society updated successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ code: 500, message: err.message });
        }
    },
};

module.exports = {societyController};
