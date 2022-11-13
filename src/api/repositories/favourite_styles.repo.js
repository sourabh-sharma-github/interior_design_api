const { FavouriteStyles } = require('../../models');

const updateFavouriteStyles = async (data) => {
    return await FavouriteStyles.upsert(data)
}

const favouriteStyles = async () => {
    return await FavouriteStyles.findAll({
        attributes: ['id', 'title', 'createdAt']
    })
}



module.exports = {
    updateFavouriteStyles, favouriteStyles
}