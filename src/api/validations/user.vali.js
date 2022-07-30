const { Joi } = require('express-validation');
module.exports = {
    vSignUpWithEmail: {
        body: Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            phone: Joi.number().min(10).required(),
            gender: Joi.number().valid(1, 2).required(),
            country: Joi.string().required(),
            about: Joi.string().required(),
            hoursTypeIds: Joi.array().min(1).required(),
            favouriteStyleTypeIds: Joi.array().min(1).required(),
            userImage: Joi.string().required(),
        }).required()
    },
    vSocialSignUp: {
        body: Joi.object({
            socialId: Joi.string().required(),
            firstName: Joi.string().optional(),
            lastName: Joi.string().optional(),
            email: Joi.string().email().optional(),
            phone: Joi.number().min(10).optional(),
            gender: Joi.number().valid(1, 2).optional(),
            country: Joi.string().optional(),
            userImage: Joi.string().optional(),
        }).required()
    },
    vVerifyOtp: {
        body: Joi.object({
            otp: Joi.number().required()
        }).required()
    },
    vEmailSignIn: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }).required()
    },
    vForgotPassword: {
        body: Joi.object({
            email: Joi.string().email().required(),
        }).required()
    },
    vChangePassword: {
        body: Joi.object({
            changeBy: Joi.number().valid(1, 2).required(),
            newPassword: Joi.string().required(),
            otp: Joi.when('changeBy', {is: 1, then: Joi.number().required()}),
            email: Joi.when('changeBy', {is: 2, then: Joi.string().email().required(), otherwise: Joi.string().empty()}),
            oldPassword: Joi.when('changeBy', {is: 2, then: Joi.string().required(), otherwise: Joi.string().empty()}),
        }).required()
    }
}