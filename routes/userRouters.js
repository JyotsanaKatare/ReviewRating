
const express = require('express')
const router = express.Router()
const user = require('../controllers/userControllers')
const auth = require('../middlewares/auth_middleware')
const { upload } = require('../middlewares/imageStorage')
const validation = require('../validation/user/userValidation')


router.post("/register", upload.single("profilePic"), validation.registerUserValidation, user.signUpUser)
router.post("/login", validation.loginUserValidation, user.userLogin)
router.post("/passwordEmailSend", user.resetPasswordEmail)
router.post("/resetPassword/:id/:token", user.resetPassword)

module.exports = router;
