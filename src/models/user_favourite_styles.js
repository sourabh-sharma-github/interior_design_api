module.exports = (sequelize, Sequelize) => {
    const UserFavouriteStyles = sequelize.define("UserFavouriteStyles", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'userId required'
                }
            }
        },
        masterId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'masterId required'
                }
            }
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_favourite_styles"
    });

    return UserFavouriteStyles;
};