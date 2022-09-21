const { Joi } = require('express-validation');
module.exports = {
    vCreateDesigner: {
        body: Joi.object({
            coverImage: Joi.string().required(),
            companyName: Joi.string().required(),
            description: Joi.string().required(),
        }).required()
    },
    vDesignerId: {
        body: Joi.object({
            designerId: Joi.number().required()
        }).required()
    },
    vCreateDesignerReview: {
        body: Joi.object({
            designerId: Joi.number().required(),
            houseTypeId: Joi.number().required(),
            renovationCost: Joi.number().required(),
            renovationDuration: Joi.string().required(),
            serviceRendered: Joi.number().required(),
            designConcept: Joi.number().required(),
            qualityOfRenovation: Joi.number().required(),
            valueForMoney: Joi.number().required(),
            review: Joi.string().required(),
            fullName: Joi.string().required(),
            email: Joi.string().required(),
            phoneNumber: Joi.string().required(),
            images: Joi.array().items({
                imageUrl: Joi.string().required(),
                type: Joi.number().required()
            }).optional()
        }).required()
    },
    vGetDesignerReviews: {
        body: Joi.object({
            designerId: Joi.number().required(),
            limit: Joi.number().required(),
            offset: Joi.number().required(),
            search: Joi.string().optional()
        }).required()
    },
    vDesignId: {
        body: Joi.object({
            designId: Joi.number().required()
        }).required()
    },
    vAddDesign: {
        body: Joi.object({
            designerId: Joi.number().required(),
            images: Joi.array().items({
                imageUrl: Joi.string().required(),
                imageInspirationType: Joi.number().required()
            }).min(1).required(), 
            trendingTypes: Joi.array().items(Number).min(1).required(),
            propertyTypeId: Joi.number().required(),
            packageIncludes: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required(),
        }).required()
    },
    vGetDesigns: {
        body: Joi.object({
            limit: Joi.number().required(),
            offset: Joi.number().required(),
            designerId: Joi.number().optional(),
            propertyTypeId: Joi.number().optional(),
            trendingTypes: Joi.array().items(Number).min(1).optional(),
        }).required()
    },
    vGetDesigners: {
        body: Joi.object({
            limit: Joi.number().required(),
            offset: Joi.number().required(),
        })
    }
}