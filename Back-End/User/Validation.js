const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(15).required(),
    emailId: Joi.string().email().required()
 
});

const loginSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(15).required(),
    emailId: Joi.string().email().required()
});

module.exports = { registerSchema,loginSchema};