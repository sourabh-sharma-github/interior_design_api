module.exports = (sequelize, Sequelize) => {
    const UserChatbotAnswers = sequelize.define("UserChatbotAnswers", {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        full_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: {
                    msg: 'Please provide email'
                }
            }
        },
        property_type: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        budget: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        area_renovate: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "user_chatbot_answers"
    });

    return UserChatbotAnswers;
};
