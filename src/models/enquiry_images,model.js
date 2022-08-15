module.exports = (sequelize, Sequelize) => {
    const EnquiryImages = sequelize.define("EnquiryImages", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        enquiryId:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "enquiry_images"
    });

    return EnquiryImages;
};