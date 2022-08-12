const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeleteVideos, getVideos } = require('../controllers/videos.cont');
const { vCreateUpdateDeleteVideos, vVideos } = require('../validations/videos.vali');

router.put('/upsert', authenticate, adminAccessOnly, validate(vCreateUpdateDeleteVideos), createUpdateDeleteVideos);
router.post('/', authenticate, adminAccessOnly, validate(vVideos), getVideos);


module.exports = router;