module.exports.adminAccessOnly = async (req, res, next) => {
    const { userType } = req.user;
    if (userType != 1) {
        return next({
            success: false,
            message: "Admin accesible only!"
        });
    } else {
        next();
    }
}