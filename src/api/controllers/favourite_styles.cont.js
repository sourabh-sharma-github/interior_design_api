const { updateFavouriteStyles, favouriteStyles } = require('../repositories/favourite_styles.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteFavouriteStyles = async (req, res) => {
    try {
        await updateFavouriteStyles(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, error.message, error)
    }
}

const getFavouriteStyles = async (req, res) => {
    try {
        const rows = await favouriteStyles();
        if (rows.length == 0) {
            throw new Error("Not found")
        }
        return __SSR(res, "Favourite styles", { rows })
    } catch (error) {
        return __SFR(res, 403, error.message, error)
    }
}

module.exports = {
    createUpdateDeleteFavouriteStyles, getFavouriteStyles
}