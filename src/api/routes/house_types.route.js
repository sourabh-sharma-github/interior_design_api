const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeleteHouseType, getHouseTypes } = require('../controllers/house_types.cont');
const { vCreateUpdateDeleteHouseType } = require('../validations/house_types.vali');

router.put('/upsert', authenticate, adminAccessOnly, validate(vCreateUpdateDeleteHouseType), createUpdateDeleteHouseType);
router.post('/', authenticate, adminAccessOnly, getHouseTypes);


module.exports = router;