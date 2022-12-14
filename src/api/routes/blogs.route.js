const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createUpdateDeleteBlogs, getBlogs, getBlog } = require('../controllers/blogs.cont');
const { vCreateUpdateDeleteBlogs, vGetBlogs } = require('../validations/blogs.vali');

router.post('/upsert', authenticate, adminAccessOnly, validate(vCreateUpdateDeleteBlogs), createUpdateDeleteBlogs);
router.post('/', validate(vGetBlogs), getBlogs);
router.get('/:id', getBlog);

module.exports = router;
