
const { join } = require("path")
const user = require("./userSchema")
const keys = require("@hapi/joi/lib/types/keys")
const { default: common } = require("@hapi/joi/lib/common")

module.exports = {
    registerUserValidation: async (req, res, next) => {
        const value = await user.registerUser.validate(req.body, { abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },

    loginUserValidation: async (req, res, next) => {
        const value = await user.loginUser.validate(req.body, { abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    }
}
