module.exports = (sequelize, Sequelize) => {
    const Inspirations = sequelize.define("Inspirations", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: "1:living, 2:dining, 3:bedroom, 4:kitchen"
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "inspirations"
    });

    Inspirations.associate = (models) => {
        Inspirations.hasOne(models.Designer, {
            sourceKey: 'type',
            foreignKey: 'id',
            as: 'master_insipiration'
        })
    }

    return Inspirations;
};