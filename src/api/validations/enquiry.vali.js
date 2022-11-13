const { Joi } = require('express-validation');
module.exports = {
    vCreateEnquiry: {
        body: Joi.object({
            propertyTypeId: Joi.number().required(),
            designerNeed: Joi.number().required(),
            noOfBedrooms: Joi.number().required(),
            propertyStatus: Joi.number().required(),
            areasNeedToRenovate: Joi.string().required(),
            propertyAddress: Joi.string().required(),
            budget: Joi.number().required(),
            keyCollectionPeriod: Joi.number().valid(0, 1, 2, 3).required(),
            renovationLoan: Joi.boolean().required(),
            priority: Joi.number().valid(0, 1).required(),
            userEnquiryType: Joi.number().valid(0, 1).required(),
            fullName: Joi.when('userEnquiryType', { is: 1, then: Joi.string().required() }),
            email: Joi.when('userEnquiryType', { is: 1, then: Joi.string().required() }),
            phone: Joi.when('userEnquiryType', { is: 1, then: Joi.string().required() }),
            otherInformation: Joi.when('userEnquiryType', { is: 1, then: Joi.string().required() }),
        }).required()
    },
    vGetEnquiries: {
        body: Joi.object({
            limit: Joi.number().required(),
            offset: Joi.number().required(),
            search: Joi.string().optional()
        }).required()
    }
}
