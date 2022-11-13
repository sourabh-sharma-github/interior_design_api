module.exports = (sequelize, Sequelize) => {
    const UserHouseTypes = sequelize.define("UserHouseTypes", {
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
        tableName: "user_house_types"
    });

    return UserHouseTypes;
};