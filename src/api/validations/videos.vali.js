const { Joi } = require('express-validation');
module.exports = {
    vCreateUpdateDeleteVideos: {
        body: Joi.object({
            id: Joi.number().optional(),
            thumbnail: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().required(),
            video_url: Joi.string().required(),
            updatedAt: Joi.optional(),
            deletedAt: Joi.string().optional(),
        }).required()
    },
    vVideos: {
        body: Joi.object({
            limit: Joi.number().required(),
            offset: Joi.number().required(),
            search: Joi.string().optional()
        }).required()
    }
}