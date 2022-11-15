const { UserChatbotAnswers } = require('../../models');

const updateUserChatbotAnswers = async (data) => {
    return await UserChatbotAnswers.upsert(data)
}


module.exports = {
    updateUserChatbotAnswers
}
