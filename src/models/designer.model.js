module.exports = (sequelize, Sequelize) => {
    const Designer = sequelize.define("Designer", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        coverImage: {
            type: Sequelize.STRING
        },
        companyName: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "designer"
    });

    return Designer;
};