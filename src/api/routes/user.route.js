const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const { signUpWithEmail, verifyOtp, userSignIn, adminSigninIn, forgotPassword, changePassword, socialSignUp } = require('../controllers/user.cont');
const { vSignUpWithEmail, vVerifyOtp, vEmailSignIn, vForgotPassword, vChangePassword, vSocialSignUp } = require('../validations/user.vali');

router.post('/signup-with-email', validate(vSignUpWithEmail), signUpWithEmail);
router.post('/social-signup', validate(vSocialSignUp), socialSignUp);
router.post('/verify-otp', validate(vVerifyOtp), verifyOtp);
router.post('/signin', validate(vEmailSignIn), userSignIn);
router.post('/admin-signin', validate(vEmailSignIn), adminSigninIn);
router.post('/forgot-password', validate(vForgotPassword), forgotPassword);
router.post('/change-password', validate(vChangePassword), changePassword);

module.exports = router;