module.exports = (sequelize, Sequelize) => {
    const Trendings = sequelize.define("Trendings", {
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
            comment: "1:scandinavian, 2:minimalist, 3:modern, 4:contempoary, 5:industrial"
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "trendings"
    });

    return Trendings;
};