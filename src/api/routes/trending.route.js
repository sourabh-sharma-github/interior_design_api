const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeleteTrendings, getTrendings, getTrending } = require('../controllers/trendings.cont');
const { vCreateUpdateDeleteTrendings, vGetTrendings } = require('../validations/trendings.vali');

router.post('/upsert', authenticate, validate(vCreateUpdateDeleteTrendings), createUpdateDeleteTrendings);
router.post('/', validate(vGetTrendings), getTrendings);
router.get('/:id', getTrending);

module.exports = router;