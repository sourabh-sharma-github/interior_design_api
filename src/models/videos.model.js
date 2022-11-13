module.exports = (sequelize, Sequelize) => {
    const Videos = sequelize.define("Videos", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        thumbnail: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        video_url: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "videos"
    });

    return Videos;
};