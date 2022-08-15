const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createEnquiry, getEnquiries } = require('../controllers/enquiry.cont');
const { vCreateEnquiry, vGetEnquiries } = require('../validations/enquiry.vali');

router.post('/create', authenticate, validate(vCreateEnquiry), createEnquiry);
router.post('/list', authenticate, adminAccessOnly, validate(vGetEnquiries), getEnquiries);

module.exports = router;