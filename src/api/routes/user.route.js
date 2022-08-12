const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { signUpWithEmail, verifyOtp, userSignIn, adminSigninIn, forgotPassword, changePassword, socialSignUp, myProfile, editProfile, deleteUser, markedAsResponded, getUserListForAdmin } = require('../controllers/user.cont');
const { vSignUpWithEmail, vVerifyOtp, vEmailSignIn, vForgotPassword, vChangePassword, vSocialSignUp, vEditProfile, vUserIdPayload, vGetUserListForAdmin } = require('../validations/user.vali');

router.post('/signup-with-email', validate(vSignUpWithEmail), signUpWithEmail);
router.post('/social-signup', validate(vSocialSignUp), socialSignUp);
router.post('/verify-otp', validate(vVerifyOtp), verifyOtp);
router.post('/signin', validate(vEmailSignIn), userSignIn);
router.post('/admin-signin', validate(vEmailSignIn), adminSigninIn);
router.post('/forgot-password', validate(vForgotPassword), forgotPassword);
router.post('/change-password', validate(vChangePassword), changePassword);
router.get('/my-profile', authenticate, myProfile);
router.patch('/edit-profile', authenticate, validate(vEditProfile), editProfile);
router.delete('/delete', authenticate, adminAccessOnly, validate(vUserIdPayload), deleteUser);
router.patch('/mark-as-responded', authenticate, adminAccessOnly, validate(vUserIdPayload), markedAsResponded);
router.get('/admin/users', authenticate, adminAccessOnly, validate(vGetUserListForAdmin), getUserListForAdmin);


module.exports = router;