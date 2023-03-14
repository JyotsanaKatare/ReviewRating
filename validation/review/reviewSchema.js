
const joi = require("joi")
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);


const Schema = {
    addReview: joi.object({
        enterYourReview: joi.string().required(),
        rating: joi.number().integer().max(5).required(),
        company_id: joi.string(),
        user_id: joi.string().required()
    })
}

module.exports = Schema
