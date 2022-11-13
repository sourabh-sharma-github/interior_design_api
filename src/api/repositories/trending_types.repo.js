const { TrendingTypes } = require('../../models');

const upsertTrendingTypes = async (data) => {
    return await TrendingTypes.upsert(data)
}

const trendingTypes = async () => {
    return await TrendingTypes.findAll({
        attributes: ['id', 'title', 'createdAt']
    })
}

module.exports = {
    upsertTrendingTypes, trendingTypes
}
