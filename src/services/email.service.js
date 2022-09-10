const nodemailer = require("nodemailer");
const emailConfig = require("../config/mailer.json")[process.env.NODE_ENV || "development"];

let transporter = nodemailer.createTransport(emailConfig);
const _SEND_EMAIL = async(emailOpts) => {
    try {
        let info = await transporter.sendMail({
            from: `Renoguru <${emailConfig.auth.user}>`, // sender address
            to: emailOpts.to, // list of receivers
            subject: emailOpts.subject, // Subject line
            text: "", // plain text body
            html: emailOpts.html, // html body
        });
        console.warn("Email sent to ", emailOpts.to);
        return info;
    } catch (error) {
        console.error("Email not sent ", error);
        throw new Error(error);
    }
}

module.exports = {
    _SEND_EMAIL
}