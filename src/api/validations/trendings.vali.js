const { Joi } = require('express-validation');
module.exports = {
    vCreateUpdateDeleteTrendings: {
        body: Joi.object({
            id: Joi.number().optional(),
            image: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().required(),
            type: Joi.number().required(),
            deletedAt: Joi.string().optional(),
        }).required()
    },
    vGetTrendings: {
        body: Joi.object({
            limit: Joi.number().required(),
            offset: Joi.number().required(),
            search: Joi.string().optional()
        }).required()
    },
}