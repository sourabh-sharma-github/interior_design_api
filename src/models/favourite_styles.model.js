module.exports = (sequelize, Sequelize) => {
    const FavouriteStyles = sequelize.define("FavouriteStyles", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Style title required'
                }
            }
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "favourite_styles"
    });

    return FavouriteStyles;
};