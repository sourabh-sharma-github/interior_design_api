module.exports = (sequelize, Sequelize) => {
    const DesignsImages = sequelize.define("DesignsImages", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        designId: {
            type: Sequelize.INTEGER,
        },
        
        imageUrl: {
            type: Sequelize.STRING,
        },
        imageInspirationType: {
            type: Sequelize.INTEGER,
        },
        areaRange: {
            type: Sequelize.STRING,
            defaultValue: null,
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "design_images"
    });

    return DesignsImages;
};