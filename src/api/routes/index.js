const express = require('express')
const router = express.Router()
const authenticationRouter = require('./user.route')
const houseTypesRouter = require('./house_types.route')
const favouriteStylesRouter = require('./favourite_styles.route')
const blogsRouter = require('./blogs.route')
const videosRouter = require('./videos.route')

router.use("/auth", authenticationRouter)
router.use("/house-types", houseTypesRouter)
router.use("/favourite-styles", favouriteStylesRouter)
router.use("/blogs", blogsRouter)
router.use("/videos", videosRouter)


module.exports = router;