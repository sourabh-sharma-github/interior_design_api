// const nodemailer = require("nodemailer");
// const emailConfig = require("../config/email_config.json")[process.env.NODE_ENV || "development"];

// let transporter = nodemailer.createTransport(emailConfig);

// module.exports.sendEmail = async(emailOpts) => {
//     try {
//         let info = await transporter.sendMail({
//             from: `Studeo <${emailConfig.auth.user}>`, // sender address
//             to: emailOpts.to, // list of receivers
//             subject: emailOpts.subject, // Subject line
//             text: "", // plain text body
//             html: emailOpts.html, // html body
//         });
//         console.log("Email sent to ", emailOpts.to);
//         return info;
//     } catch (error) {
//         console.log("Email not sent ", error);
//         throw new Error(error);
//     }
// }