const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeleteFavouriteStyles, getFavouriteStyles } = require('../controllers/favourite_styles.cont');
const { vCreateUpdateDeleteFavouriteStyles } = require('../validations/favourite_styles.vali');

router.post('/upsert', authenticate, adminAccessOnly, validate(vCreateUpdateDeleteFavouriteStyles), createUpdateDeleteFavouriteStyles);
router.post('/', getFavouriteStyles);


module.exports = router;
