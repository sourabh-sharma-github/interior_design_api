const { upsertPropertyTypes, propertyTypes } = require('../repositories/property_types.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeletePropertyType = async (req, res) => {
    try {
        await upsertPropertyTypes(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const getPropertyTypes = async (req, res) => {
    try {
        const rows = await propertyTypes();
        if (rows.length == 0){
            throw new Error("Not found")
        }
        return __SSR(res, "Property types", { rows })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

module.exports = {
    createUpdateDeletePropertyType, getPropertyTypes
}