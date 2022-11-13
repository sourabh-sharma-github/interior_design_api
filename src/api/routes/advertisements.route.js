const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeleteAdvertisements, getAdvertisements } = require('../controllers/advertisements.cont');
const { vCreateUpdateDeleteAdvertisements } = require('../validations/advertisements.vali');

router.post('/upsert', authenticate, adminAccessOnly, validate(vCreateUpdateDeleteAdvertisements), createUpdateDeleteAdvertisements);
router.post('/', getAdvertisements);


module.exports = router;
