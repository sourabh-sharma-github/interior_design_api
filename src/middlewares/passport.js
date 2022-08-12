const { User } = require('../models');
const { jwtSecretKey } = require('../config/index')['server']

const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecretKey,
};

module.exports = passport.use(new Strategy(jwtOptions, async (payload, next, req, res) => {
    const { id } = payload;
    const user = await User.findByPk(id);
    if (user) {
        next(null, user);
    } else {
        return next({
            success: false,
            message: "User logout.",
            response: {
                user_deleted: true
            }
        });
    }
}))