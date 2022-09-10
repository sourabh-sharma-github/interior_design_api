const { upsertHouseTypes, houseTypes } = require('../repositories/house_types.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteHouseType = async (req, res) => {
    try {
        await upsertHouseTypes(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, error.message, error)
    }
}

const getHouseTypes = async (req, res) => {
    try {
        const rows = await houseTypes();
        if (rows.length == 0){
            throw new Error("Not found")
        }
        return __SSR(res, "House types", { rows })
    } catch (error) {
        return __SFR(res, 403, error.message, error)
    }
}

module.exports = {
    createUpdateDeleteHouseType, getHouseTypes
}