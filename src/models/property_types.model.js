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
        tableName: "property_types"
    });
    return PropertyTypes;
};