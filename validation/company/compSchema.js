
const joi = require("joi")
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);
const Joi = require('joi').extend(require('@joi/date'))

const Schema = {
    addCompany: joi.object({
        companyName: joi.string().required(),
        location: joi.string().required(),
        city: joi.string().required(),
        foundedOn: Joi.date().format('YYYY/MM/DD')
    }).unknown(true),
}

module.exports = Schema
