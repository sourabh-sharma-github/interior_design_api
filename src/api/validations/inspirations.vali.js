const { Joi } = require('express-validation');
module.exports = {
    vCreateUpdateDeleteInspirations: {
        body: Joi.object({
            id: Joi.number().optional(),
            image: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().required(),
            deletedAt: Joi.string().optional(),
        }).required()
    },
    vGetInspirations: {
        body: Joi.object({
            limit: Joi.number().required(),
            offset: Joi.number().required(),
            search: Joi.string().optional()
        }).required()
    },
}