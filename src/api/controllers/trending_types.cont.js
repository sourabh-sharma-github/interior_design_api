const { upsertTrendingTypes, trendingTypes } = require('../repositories/trending_types.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteTrendingType = async (req, res) => {
    try {
        await upsertTrendingTypes(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getTrendingTypes = async (req, res) => {
    try {
        const rows = await trendingTypes();
        if (rows.length == 0){
            throw new Error("Not found")
        }
        return __SSR(res, "Trending types", { rows })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

module.exports = {
    createUpdateDeleteTrendingType, getTrendingTypes
}