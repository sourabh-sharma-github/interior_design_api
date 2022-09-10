module.exports = (sequelize, Sequelize) => {
    const Advertisements = sequelize.define("Advertisements", {
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
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
        section_type: {
            type: Sequelize.INTEGER,
            defaultValue: 1,
            comment: '1=blogs, 2.trending, 3=inspiration, 4=interiordesign, 5=articles'
        },
        common: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        track_count: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "advertisements"
    });

    return Advertisements;
};