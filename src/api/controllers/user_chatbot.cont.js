const { updateUserChatbotAnswers } = require('../repositories/user_chatbot_answers.repo');
const { __SSR, __SFR } = require('../../services/req-res.service')

const createUpdateDeleteUserChatbotAnswers = async (req, res) => {
    try {
        const data = await updateUserChatbotAnswers(req.body);
        return __SSR(res, "Updated successfully", {
            data
        })
    } catch (error) {
        return __SFR(res, 403, error.message)
    }
}

module.exports = {
    createUpdateDeleteUserChatbotAnswers
}
