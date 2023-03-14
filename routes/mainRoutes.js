
const express = require('express');
const router = express.Router()
const userRouter = require('./userRouters')
const compRouter = require('./compRouters')
const reviewRouter = require('./reviewRouters')


router.use("/user", userRouter)
router.use("/company", compRouter)
router.use("/review", reviewRouter)

module.exports = router;
