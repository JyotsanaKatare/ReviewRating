
const { join } = require("path")
const company = require("./compSchema")
const keys = require("@hapi/joi/lib/types/keys")
const { default: common } = require("@hapi/joi/lib/common")

module.exports = {
    compValidation: async (req, res, next) => {
        const value = await company.addCompany.validate(req.body, { abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
}
