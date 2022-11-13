const { Inspirations, HouseTypes } = require('../../models');

const updateInspirations = async (data) => {
    return await Inspirations.upsert(data)
}

const inspirationsData = async (limit, offset, search) => {
    let where = new Object

    if (search) {
        where = {
            title: {
                [Op.like]: `%${search}%`
            }
        }
    }

    return await Inspirations.findAll({
        where,
        limit,
        offset,
        attributes: {
            exclude: ['updatedAt', 'deletedAt']
        },
        include: [{
            model: HouseTypes,
            as: 'master_insipiration',
            required: false,
        }]
    })
}

const inspirationData = async (pk)=> {
    return await Inspirations.findByPk(pk)
}

module.exports = {
    updateInspirations, inspirationsData, inspirationData
}
