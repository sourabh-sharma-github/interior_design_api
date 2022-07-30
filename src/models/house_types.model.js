module.exports = (sequelize, Sequelize) => {
    const HouseTypes = sequelize.define("HouseTypes", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'House type title required'
                }
            }
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "house_types"
    });

    return HouseTypes;
};