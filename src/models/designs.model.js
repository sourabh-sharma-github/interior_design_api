module.exports = (sequelize, Sequelize) => {
    const Designs = sequelize.define("Designs", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        designerId: {
            type: Sequelize.INTEGER,
        },
        propertyTypeId: {
            type: Sequelize.INTEGER,
        },
        title: {
            type: Sequelize.STRING,
            defaultValue: null
        }, 
        packageIncludes: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        price: {
            type: Sequelize.DECIMAL,
        },
        likes: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        views: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "designs"
    });

    
    Designs.associate = (models) => {
        Designs.hasOne(models.Designer, {
            sourceKey: 'designerId',
            foreignKey: 'id',
            as: 'designer'
        })
        Designs.hasMany(models.DesignsImages, {
            sourceKey: 'id',
            foreignKey: 'designId',
            as: 'design_images'
        })
        Designs.hasMany(models.DesignTrendingTypes, {
            sourceKey: 'id',
            foreignKey: 'designId',
            as: 'trending_types'
        })
    }

    return Designs;
};