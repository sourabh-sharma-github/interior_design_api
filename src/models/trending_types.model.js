module.exports = (sequelize, Sequelize) => {
    const TrendingTypes = sequelize.define("TrendingTypes", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        type: {
            type: Sequelize.STRING,
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "trendingTypes"
    });
    return TrendingTypes;
};