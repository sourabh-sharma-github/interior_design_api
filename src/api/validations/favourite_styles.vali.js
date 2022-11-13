const { Joi } = require('express-validation');
module.exports = {
    vCreateUpdateDeleteFavouriteStyles: {
        body: Joi.object({
            id: Joi.number().optional(),
            title: Joi.string().required(),
            deletedAt: Joi.string().optional(),
        }).required()
    }
}
