const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const { createUpdateDeleteUserChatbotAnswers } = require('../controllers/user_chatbot.cont');
const { vCreateUpdateDeleteUserChatbotAnswers } = require('../validations/user_chatbot_answers.vali');

router.post('/upsert', validate(vCreateUpdateDeleteUserChatbotAnswers), createUpdateDeleteUserChatbotAnswers);

module.exports = router;
