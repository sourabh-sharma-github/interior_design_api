const { Joi } = require('express-validation');
module.exports = {
    vCreateUpdateDeleteUserChatbotAnswers: {
        body: Joi.object({
            email: Joi.string().email().required(),
            full_name: Joi.string().optional(),
            property_type: Joi.number().optional(),
            budget: Joi.number().optional(),
            area_renovate: Joi.string().optional(),
        }).required()
    },
}
