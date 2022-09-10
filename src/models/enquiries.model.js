module.exports = (sequelize, Sequelize) => {
    const Enquiries = sequelize.define("Enquiries", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'userId required'
                }
            }
        },
        propertyTypeId:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        designerNeed: {
            type: Sequelize.TINYINT,
            defaultValue: 1
        },
        noOfBedrooms: {
            type: Sequelize.TINYINT,
            defaultValue: 1
        },
        propertyStatus: {
            type: Sequelize.TINYINT,
            defaultValue: 0,
            comment: "0=>new 1=>resale 2=>existing"
        },
        areasNeedToRenovate: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        propertyAddress: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        budget: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        keyCollectionPeriod:{
            type: Sequelize.TINYINT,
            defaultValue: 0,
            comment: "0=>collected 1=>within 3 months, 2=>within 6 months, 3=>more than 6 months"
        },
        renovationLoan: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        priority:{
            type: Sequelize.TINYINT,
            defaultValue: 0,
            comment: "0=>Aesthetically nice 1=>Cost effective"
        },
        userEnquiryType:{
            type: Sequelize.TINYINT,
            defaultValue: 0,
            comment: "0=>For self 1=>For others"
        },
        fullName: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        email: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        phone: {
            type: Sequelize.INTEGER,
            defaultValue: null,
            validate: {
                isNumeric: true,
            }
        },
        otherInformation:{
            type: Sequelize.STRING,
            defaultValue: null,
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "enquiries"
    });

    // Enquiries.associate = (models) => {
    //     Enquiries.hasOne(models.User, {
    //         sourceKey: 'userId',
    //         foreignKey: 'id',
    //         as:'user',
    //     })
    // }


    return Enquiries;
};