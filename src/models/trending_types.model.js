module.exports = (sequelize, Sequelize) => {
    const TrendingTypes = sequelize.define("TrendingTypes", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "trending_types"
    });
    return TrendingTypes;
};