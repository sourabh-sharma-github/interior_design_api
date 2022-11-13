const { User, UserHouseTypes, UserFavouriteStyles } = require('../../models');
const { Op } = require("sequelize");

const createUser = async (data) => {
    return await User.create(data)
}

const updateUser = async (data, id) => {
    return await User.update(data, { where: { id } })
}

const findUserWithOtp = async (otp) => {
    return await User.findOne({
        where: { otp },
        attributes: ['id', 'otp']
    })
}

const updateOtp = async (id, otp, isEmailVerified) => {
    let update = { otp }
    if (isEmailVerified) update['isEmailVerified'] = isEmailVerified
    return await User.update(update, { where: { id } })
}

const findUserWithEmailPass = async (email, password) => {
    return await User.findOne({
        where: { email, password, isEmailVerified: true },
        attributes: ['id', 'email', 'userType']
    })
}

const findWithEmail = async (email) => {
    return await User.findOne({
        where: { email },
        attributes: ['id', 'email', 'userType']
    })
}

const findWithEmailOrSocailId = async (socialId, email) => {
    let queryArray = [{ socialId }]
    if (email) {
        queryArray.push({ email })
    }
    return await User.findOne({
        where: {
            [Op.or]: queryArray
        },
        attributes: ['id', 'email', 'socialId', 'userType']
    })
}

const updatePassword = async (id, password) => {
    return await User.update({ password }, { where: { id } })
}

const createUserHouseTypes = async (array) => {
    return await UserHouseTypes.bulkCreate(array)
}

const createUserFavouriteStyles = async (array) => {
    return await UserFavouriteStyles.bulkCreate(array)
}

const getUserProfile = async (id) => {
    return await User.findOne({
        where: { id },
        attributes: {
            exclude: ['password', 'socialId', 'otp', 'updatedAt', 'deletedAt']
        }
    })
}

const softDeleteUser = async (id) => {
    return await User.destroy({
        where: { id }
    })
}

const getUsersForAdmin = async (limit, offset, search) => {
    let where = new Object;
    if (search) {
        where = {
            [Op.or]: [{
                firstName: {
                    [Op.like]: `%${search}%`
                }
            }, {
                lastName: {
                    [Op.like]: `%${search}%`
                }
            }, {
                email: {
                    [Op.like]: `%${search}%`
                }
            }, {
                phone: {
                    [Op.like]: `%${search}%`
                }
            }, {
                country: {
                    [Op.like]: `%${search}%`
                }
            }]
        }
    }
    where['userType'] = 2
    return await User.findAndCountAll({
        where,
        attributes: {
            exclude: ['updatedAt', 'deletedAt', 'password']
        },
        limit,
        offset
    })
}

module.exports = {
    createUser, findUserWithOtp, updateOtp, findUserWithEmailPass, updatePassword, findWithEmail, createUserHouseTypes, createUserFavouriteStyles, findWithEmailOrSocailId, updateUser, getUserProfile, softDeleteUser, getUsersForAdmin
}
