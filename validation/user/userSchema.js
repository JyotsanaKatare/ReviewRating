
const joi = require("joi")
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);

const Schema = {
      registerUser: joi.object({
            userName: joi.string().max(20).required(),
            userEmail: joi.string().email().required(),
            password: joiPassword
                  .string()
                  .minOfSpecialCharacters(3)
                  .minOfLowercase(4)
                  .minOfUppercase(5)
                  .minOfNumeric(6)
                  .noWhiteSpaces()
                  .messages({
                        'password.minOfSpecialCharacters': '{#label} should contain at least {#min} special character',
                        'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
                        'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
                        'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
                        'password.noWhiteSpaces': '{#label} should not contain white spaces',
                  }),
            phone_no: joi.number().integer().min(100000000).max(9999999999).message("Invalid mobile number").required(),
            city: joi.string().required(),
            state: joi.string().required()
      }).unknown(true),

      //Here we can add another schema like login
      loginUser: joi.object({
            userEmail: joi.string().email().required(),
            password: joi.string().required(),
                  
      }).unknown(true),
}

module.exports = Schema
