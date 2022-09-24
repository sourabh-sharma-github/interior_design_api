module.exports = (sequelize, Sequelize) => {
    const PropertyTypes = sequelize.define("PropertyTypes", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "property_types"
    });
    return PropertyTypes;
};