const { Advertisements } = require('../../models');
const { Op, literal } = require("sequelize");
const upsertAdvertisements = async (data) => {
    return await Advertisements.upsert({
        ...data,
        track_count: literal('track_count + 1')
    })
}

const advertisementsTypes = async () => {
    return await Advertisements.findAll({
        // attributes: ['id', 'title', 'createdAt']
    })
}

module.exports = {
    upsertAdvertisements, advertisementsTypes
}