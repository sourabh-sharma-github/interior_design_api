const express = require('express');
const router = express.Router();
const { createImageUrl } = require('../controllers/s3.cont');
router.post('/upload-image-to-s3', createImageUrl);
module.exports = router;
