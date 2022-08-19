const { Blogs } = require('../../models');

const updateBlogs = async (data) => {
    return await Blogs.upsert(data)
}

const blogs = async (limit, offset, search) => {
    let where = new Object

    if (search) {
        where = {
            title: {
                [Op.like]: `%${search}%`
            }
        }
    }

    return await Blogs.findAll({
        where,
        limit,
        offset,
        attributes: {
            exclude: ['updatedAt', 'deletedAt']
        }
    })
}

module.exports = {
    updateBlogs, blogs
}