module.exports = (sequelize, Sequelize) => {
    const DesignerReviewsImages = sequelize.define("DesignerReviewsImages", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        designerReviewId: {
            type: Sequelize.INTEGER,
        },
        imageUrl: {
            type: Sequelize.STRING,
        },
        type: {
            type: Sequelize.TINYINT,
            comment: '1.JPG, 2.PNG, 3.GIF'
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "designer_reviews_images"
    });

    return DesignerReviewsImages;
};