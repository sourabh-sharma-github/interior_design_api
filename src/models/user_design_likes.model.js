module.exports = (sequelize, Sequelize) => {
    const UserDesignLikes = sequelize.define("UserDesignLikes", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER,
        },
        designId: {
            type: Sequelize.INTEGER,
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_design_likes"
    });
    return UserDesignLikes;
};