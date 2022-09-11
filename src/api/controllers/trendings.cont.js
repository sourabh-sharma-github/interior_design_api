const { updateTrendings, trendingsData, trendingData } = require('../repositories/trendings.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteTrendings = async (req, res) => {
    try {
        await updateTrendings(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getTrendings = async (req, res) => {
    try {
        const { limit, offset, search } = req.body;
        const rows = await trendingsData(limit, offset, search);
        if (rows.length == 0) {
            throw new Error("Not found")
        }
        return __SSR(res, "Trendings", { rows })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getTrending = async (req, res) => {
    try {
        const { id } = req.params;
        const data= await trendingData(id);
        return __SSR(res, "Trending", data)
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

module.exports = {
    createUpdateDeleteTrendings, getTrendings, getTrending
}