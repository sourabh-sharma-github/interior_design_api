const { updateInspirations, inspirationsData, inspirationData } = require('../repositories/inspirations.model');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteInspirations = async (req, res) => {
    try {
        await updateInspirations(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getInspirations = async (req, res) => {
    try {
        const { limit, offset, search } = req.body;
        const rows = await inspirationsData(limit, offset, search);
        if (rows.length == 0) {
            throw new Error("Not found")
        }
        return __SSR(res, "Inspirations", { rows })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getInspiration = async (req, res) => {
    try {
        const { id } = req.params;
        const data= await inspirationData(id);
        return __SSR(res, "Inspiration", data)
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

module.exports = {
    createUpdateDeleteInspirations, getInspirations, getInspiration
}