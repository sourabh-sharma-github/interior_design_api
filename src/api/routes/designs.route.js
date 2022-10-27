const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const passport = require('passport');
require('../../middlewares/passport');
const { adminAccessOnly } = require('../../middlewares/adminValidator')

const authenticate = passport.authenticate('jwt', { session: false });

const { createDesigner, deleteDesign,deleteDesigner, getDesigner, createDesignerReview, getDesignerReviews, likeUnlikeDesign, viewDesign, addDesign, getDesigns, getDesigners } = require('../controllers/designs.cont');
const { vCreateDesignerReview, vDeleteDesign, vGetDesignerReviews, vDesignId, vAddDesign, vCreateDesigner, vDesignerId, vGetDesigns, vGetDesigners } = require('../validations/designs.vali');

router.post('/create-designer', authenticate, adminAccessOnly, validate(vCreateDesigner), createDesigner);
router.post('/delete-designer', authenticate, adminAccessOnly, validate(vDeleteDesign), deleteDesigner);
router.post('/get-designer', authenticate, validate(vDesignerId), getDesigner);
router.post('/create-designer-review', authenticate, validate(vCreateDesignerReview), createDesignerReview);
router.post('/designer-reviews', authenticate, validate(vGetDesignerReviews), getDesignerReviews);
router.post('/add-design', authenticate, validate(vAddDesign), addDesign);
router.post('/delete', authenticate, validate(vDeleteDesign), deleteDesign);
router.post('/like-unlike-design', authenticate, validate(vDesignId), likeUnlikeDesign);
router.post('/update-design-view', authenticate, validate(vDesignId), viewDesign);
router.post('/get-designs', validate(vGetDesigns), getDesigns);
router.post('/get-designers', validate(vGetDesigners), getDesigners);


module.exports = router;