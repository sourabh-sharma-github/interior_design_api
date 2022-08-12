const { createUser, findUserWithOtp, updateOtp, findUserWithEmailPass, updatePassword, findWithEmail, createUserHouseTypes, createUserFavouriteStyles, findWithEmailOrSocailId, updateUser, getUserProfile, softDeleteUser, getUsersForAdmin } = require('../repositories/user.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')
const { random_otp, } = require('../../services/utils')

const signUpWithEmail = async (req, res) => {
    try {
        const { hoursTypeIds, favouriteStyleTypeIds } = req.body;
        const otp = await random_otp()
        const user = await createUser({ ...req.body, otp })

        let user_house_types = new Array
        hoursTypeIds.forEach(id => {
            user_house_types.push({
                masterId: id, userId: user.id
            })
        })

        let user_favourite_style_types = new Array
        favouriteStyleTypeIds.forEach(id => {
            user_favourite_style_types.push({
                masterId: id, userId: user.id
            })
        })

        await createUserHouseTypes(user_house_types)
        await createUserFavouriteStyles(user_favourite_style_types)

        return __SSR(res, "Signup successfully, Please verify OTP to proceed")
    } catch (error) {
        return __SFR(res, 403, "Email already exists, Please try with different email")
    }
}

const socialSignUp = async (req, res) => {
    try {
        const { socialId, email } = req.body;
        let user = await findWithEmailOrSocailId(socialId, email)
        if (!user) {
            user = await createUser({ ...req.body })
        } else {
            await updateUser({ ...req.body }, user.id)
        }
        const token = user.getJWT();
        return __SSR(res, "Signup successfully.", {
            id: user.id,
            token
        })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const verifyOtp = async (req, res) => {
    try {
        const { otp } = req.body;
        const user = await findUserWithOtp(otp)
        if (!user) throw new Error("Invalid OTP")
        await updateOtp(user.id, otp, true)
        const token = user.getJWT();
        return __SSR(res, "OTP verified!", {
            id: user.id,
            token
        })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const userSignIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await findUserWithEmailPass(email, password)
        if (!user) throw new Error("Invalid email/password")
        const token = user.getJWT();
        return __SSR(res, "SignIn successfully", {
            id: user.id,
            token
        })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const adminSigninIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await findUserWithEmailPass(email, password)
        if (!user || user && user.userType != 1) {
            throw new Error("Invalid email/password")
        }
        const token = user.getJWT();
        return __SSR(res, "SignIn successfully", {
            id: user.id,
            token
        })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body
        const user = await findWithEmail(email);
        if (!user) throw new Error("Invalid email")
        const otp = await random_otp()
        await updateOtp(user.id, otp)
        return __SSR(res, "OTP sent to your email.")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const changePassword = async (req, res) => {
    try {
        const { changeBy, otp, email, oldPassword, newPassword } = req.body;
        let user;
        switch (changeBy) {
            case 1: user = await findUserWithOtp(otp); break;
            case 2: user = await findUserWithEmailPass(email, oldPassword); break;
        }
        if (!user) throw new Error("Invalid input")
        await updatePassword(user.id, newPassword)
        await updateOtp(user.id, null)
        return __SSR(res, "Password changed.")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const myProfile = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await getUserProfile(id)
        return __SSR(res, "My profile.", user)
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const editProfile = async (req, res) => {
    try {
        const { id } = req.user;
        await updateUser(req.body, id)
        const user = await getUserProfile(id)
        return __SSR(res, "Profile updated.", user)

    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.body;
        await softDeleteUser(userId)
        return __SSR(res, "User deleted")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

const markedAsResponded = async (req, res) => {
    try {
        const { userId } = req.body;
        await updateUser({ adminResponded: true }, userId)
        return __SSR(res, "User updated")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}


const getUserListForAdmin = async (req, res) => {
    try {
        const { limit, offset, search } = req.body
        const { count, rows } = await getUsersForAdmin(limit, offset, search)
        if (rows.length == 0) {
            throw new Error('List not found');
        }
        return __SSR(res, "Users", {
            count, rows
        })
    } catch (error) {
        return __SFR(res, 404, error.message)
    }
}


module.exports = {
    signUpWithEmail, socialSignUp, verifyOtp, userSignIn, adminSigninIn, forgotPassword, changePassword, myProfile, editProfile, deleteUser, markedAsResponded, getUsersForAdmin, getUserListForAdmin
}