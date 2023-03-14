
const { join } = require("path")
const review = require('./reviewSchema')
const keys = require("@hapi/joi/lib/types/keys")
const { default: common } = require("@hapi/joi/lib/common")

module.exports = {
    reviewValidation: async (req, res, next) => {
        const value = await review.addReview.validate(req.body, { abortEarly: false })
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