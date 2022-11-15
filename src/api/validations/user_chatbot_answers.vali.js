const { Joi } = require('express-validation');
module.exports = {
    vCreateUpdateDeleteUserChatbotAnswers: {
        body: Joi.object({
            id: Joi.number().optional(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            property_type: Joi.number().required(),
            budget: Joi.number().required(),
            area_renovate: Joi.string().required(),
        }).required()
    },
}
