const { User } = require('../models');
const { jwtSecretKey } = require('../config/index')['server']

const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecretKey,
};

module.exports = passport.use(new JwtStrategy(jwtOptions, async (payload, next) => {
    const { user_id } = payload;
    const user = await User.findByPk({ user_id });

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