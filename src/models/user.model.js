const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../config/index')['server']

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        firstName: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        lastName: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: {
                    msg: 'Please provide email'
                }
            }
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        phone: {
            type: Sequelize.STRING,
            defaultValue: null,
            validate: {
                isNumeric: true,
            }
        },
        gender: {
            type: Sequelize.TINYINT,
            defaultValue: 0,
            comment: "0.not_selected, 1.male, 2.female",
        },
        country: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        about: {
            type: Sequelize.TEXT,
            defaultValue: null
        },
        socialId: {
            type: Sequelize.STRING,
            unique: true,
            defaultValue: null
        },
        userImage: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        singUpType: {
            type: Sequelize.TINYINT,
            defaultValue: 1,
            comment: "1=>email & pass 2=>apple 3=>google"
        },
        otp: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        isEmailVerified: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        userType: {
            type: Sequelize.INTEGER,
            defaultValue: 2,
            comment: "1=>admin 2=>user"
        },
        adminResponded: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "users"
    });

    User.prototype.getJWT = function () {
        return "Bearer " + jwt.sign({ id: this.id }, jwtSecretKey);
    };

    return User;
};