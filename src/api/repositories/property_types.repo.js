const { PropertyTypes } = require('../../models');

const upsertPropertyTypes = async (data) => {
    return await PropertyTypes.upsert(data)
}

const propertyTypes = async () => {
    return await PropertyTypes.findAll({
        attributes: ['id', 'title', 'createdAt']
    })
}

module.exports = {
    upsertPropertyTypes, propertyTypes
}
