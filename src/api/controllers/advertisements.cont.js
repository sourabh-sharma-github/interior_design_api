const { upsertAdvertisements, advertisementsTypes } = require('../repositories/advertisements.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteAdvertisements = async (req, res) => {
    try {
        await upsertAdvertisements(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, "Erro while updating data", error)
    }
}

const getAdvertisements = async (req, res) => {
    try {
        const rows = await advertisementsTypes();
        if (rows.length == 0){
            throw new Error("Not found")
        }
        return __SSR(res, "Advertisements", { rows })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

module.exports = {
    createUpdateDeleteAdvertisements, getAdvertisements
}
