const Joi = require('joi')

const registerValidation = (req,res,next) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().max(100).required(),
        password: Joi.string().min(4).max(100).required()
    })
}