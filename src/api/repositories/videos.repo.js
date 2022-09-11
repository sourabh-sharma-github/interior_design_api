const { Videos } = require('../../models');

const updateVideos = async (data) => {
    return await Videos.upsert(data)
}

const videos = async (limit, offset, search) => {
    let where = new Object

    if (search) {
        where = {
            title: {
                [Op.like]: `%${search}%`
            }
        }
    }

    return await Videos.findAll({
        where,
        limit,
        offset,
        // attributes: ['id', 'title', 'createdAt']
    })
}

module.exports = {
    updateVideos, videos
}