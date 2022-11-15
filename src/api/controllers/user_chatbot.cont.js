const { updateUserChatbotAnswers } = require('../repositories/user_chatbot_answers.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteUserChatbotAnswers = async (req, res) => {
    try {
        await updateUserChatbotAnswers(req.body);
        return __SSR(res, "Updated successfully")
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

module.exports = {
    createUpdateDeleteUserChatbotAnswers
}
