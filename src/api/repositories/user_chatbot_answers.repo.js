const { UserChatbotAnswers } = require('../../models');

const updateUserChatbotAnswers = async (data) => {
    // const {} = 
    let exist = await UserChatbotAnswers.findOne({
        where: {email: data.email}
    })
    if (!exist){
        exist =  await UserChatbotAnswers.create(data)
    }else {
        await UserChatbotAnswers.update(data, {
            where: {email: data.email}
        })
        exist = await UserChatbotAnswers.findOne({
            where: {email: data.email}
        })
    }

    return exist
}


module.exports = {
    updateUserChatbotAnswers
}
