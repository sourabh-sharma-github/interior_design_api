const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createDesigner, getDesigner, createDesignerReview, getDesignerReviews, likeUnlikeDesign, viewDesign, addDesign, getDesigns } = require('../controllers/designs.cont');
const { vCreateDesignerReview, vGetDesignerReviews, vDesignId, vAddDesign, vCreateDesigner, vDesignerId, vGetDesigns } = require('../validations/designs.vali');

router.post('/create-designer', authenticate, adminAccessOnly, validate(vCreateDesigner), createDesigner);
router.post('/get-designer', authenticate, validate(vDesignerId), getDesigner);
router.post('/create-designer-review', authenticate, validate(vCreateDesignerReview), createDesignerReview);
router.post('/designer-reviews', authenticate, validate(vGetDesignerReviews), getDesignerReviews);
router.post('/add-design', authenticate, validate(vAddDesign), addDesign);
router.post('/like-unlike-design', authenticate, validate(vDesignId), likeUnlikeDesign);
router.post('/update-design-view', authenticate, validate(vDesignId), viewDesign);
router.post('/get-designs', authenticate, validate(vGetDesigns), getDesigns);


module.exports = router;