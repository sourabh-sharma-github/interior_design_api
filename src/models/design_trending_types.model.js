module.exports = (sequelize, Sequelize) => {
    const DesignTrendingTypes = sequelize.define("DesignTrendingTypes", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        designId: {
            type: Sequelize.INTEGER,
        },
        type: {
            type: Sequelize.INTEGER,
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "design_trendingTypes"
    });

    return DesignTrendingTypes;
};
