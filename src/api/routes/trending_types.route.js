const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeleteTrendingType, getTrendingTypes } = require('../controllers/trending_types.cont');
const { vCreateUpdateDeleteTrendingType } = require('../validations/trending_types.vali');

router.post('/upsert', authenticate, adminAccessOnly, validate(vCreateUpdateDeleteTrendingType), createUpdateDeleteTrendingType);
router.post('/', getTrendingTypes);


module.exports = router;
