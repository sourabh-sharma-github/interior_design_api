const { Enquiries, User } = require('../../models');

const create = async (data) => {
    return await Enquiries.create(data)
}

const enquiries = async (limit, offset, search) => {
    return await Enquiries.findAndCountAll({
        limit,
        offset,
        attributes: {
            exclude: ['updatedAt', 'deletedAt']
        },
        include: [{
            model: User,
            as: 'user',
            required: true,
            attributes: ['firstName', 'lastName', 'email', 'phone']
        }]
    })
}

module.exports = {
    create, enquiries
}