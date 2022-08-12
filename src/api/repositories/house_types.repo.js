const { HouseTypes } = require('../../models');

const upsertHouseTypes = async (data) => {
    return await HouseTypes.upsert(data)
}

const houseTypes = async () => {
    return await HouseTypes.findAll({
        attributes: ['id', 'title', 'createdAt']
    })
}

module.exports = {
    upsertHouseTypes, houseTypes
}