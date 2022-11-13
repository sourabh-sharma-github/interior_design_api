const { Joi } = require('express-validation');
module.exports = {
    vCreateUpdateDeleteAdvertisements: {
        body: Joi.object({
            id: Joi.number().optional(),
            image: Joi.string().required(),
            title: Joi.string().required(),
            link: Joi.string().required(),
            section_type: Joi.number().required(),
            common: Joi.boolean().required(),
            deletedAt: Joi.string().optional(),
        }).required()
    }
}
