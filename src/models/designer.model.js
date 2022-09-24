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
        },
        email: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        logo: {
            type: Sequelize.STRING
        },
        averageRating: {
            type: Sequelize.STRING
        },
        totalReviewCount: {
            type: Sequelize.INTEGER
        },
        totalDesigns: {
            type: Sequelize.INTEGER
        },
        totalPhotosUploaded: {
            type: Sequelize.INTEGER
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "designer"
    });

    return Designer;
};