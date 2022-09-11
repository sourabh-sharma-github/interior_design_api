const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeleteInspirations, getInspirations, getInspiration } = require('../controllers/inspirations.cont');
const { vCreateUpdateDeleteInspirations, vGetInspirations } = require('../validations/inspirations.vali');

router.post('/upsert', authenticate, validate(vCreateUpdateDeleteInspirations), createUpdateDeleteInspirations);
router.post('/', validate(vGetInspirations), getInspirations);
router.get('/:id', getInspiration);

module.exports = router;