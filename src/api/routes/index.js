const express = require('express');
const router = express.Router();
const authenticationRouter = require('./user.route')
router.use("/auth", authenticationRouter);
module.exports = router;