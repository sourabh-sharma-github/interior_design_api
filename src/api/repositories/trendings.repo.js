const { Trendings } = require('../../models');

const updateTrendings = async (data) => {
    return await Trendings.upsert(data)
}

const trendingsData = async (limit, offset, search) => {
    let where = new Object

    if (search) {
        where = {
            title: {
                [Op.like]: `%${search}%`
            }
        }
    }

    return await Trendings.findAll({
        where,
        limit,
        offset,
        attributes: {
            exclude: ['updatedAt', 'deletedAt']
        }
    })
}

const trendingData = async (pk)=> {
    return await Trendings.findByPk(pk)
}

module.exports = {
    updateTrendings, trendingsData, trendingData
}
