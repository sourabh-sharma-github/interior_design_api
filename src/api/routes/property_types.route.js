const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeletePropertyType, getPropertyTypes } = require('../controllers/property_type.cont');
const { vCreateUpdateDeletePropertyType } = require('../validations/property_types.vali');

router.post('/upsert', authenticate, adminAccessOnly, validate(vCreateUpdateDeletePropertyType), createUpdateDeletePropertyType);
router.post('/', getPropertyTypes);


module.exports = router;