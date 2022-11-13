const __SSR = (res, message, data) => {
    let send = {
        success: true,
        message,
        
        data
    };

    if (data == null) {
        delete send.data;
    };

    return res.status(200).json(send);
}

const __SFR = (res, response_code, message, error) => {
    let send = {
        success: false,
        message,
        error
    };

    if (error == null) {
        delete send.error;
    };

    return res.status(response_code).json(send);
}

module.exports = {
    __SSR, __SFR
}