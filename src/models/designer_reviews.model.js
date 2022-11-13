module.exports = (sequelize, Sequelize) => {
    const DesignerReviews = sequelize.define("DesignerReviews", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER,
        },
        designerId: {
            type: Sequelize.INTEGER,
        },
        houseTypeId: {
            type: Sequelize.INTEGER,
        },
        renovationCost: {
            type: Sequelize.DECIMAL,
        },
        renovationDuration: {
            type: Sequelize.STRING,
        },
        serviceRendered: {
            type: Sequelize.INTEGER,
        },
        designConcept: {
            type: Sequelize.INTEGER,
        },
        qualityOfRenovation: {
            type: Sequelize.INTEGER,
        },
        valueForMoney: {
            type: Sequelize.INTEGER,
        },
        average: {
            type: Sequelize.DECIMAL,
        },
        review: {
            type: Sequelize.TEXT,
        },
        fullName: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        phoneNumber: {
            type: Sequelize.STRING,
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "designer_reviews"
    });

    return DesignerReviews;
};
