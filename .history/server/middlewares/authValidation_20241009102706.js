const Joi = require('joi')

const registerValidation = (req,res,next) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().max(100).required(),
        password: Joi.string().min(4).max(100).required()
    });
    const {err} = schema.validate(req.body);
    if(err) {
        return (
            res.status(400)
            .json({massage:"Bad request",err})
        )
    }
    next();
}

const loginValidation = (req,res,next) => {
    const schema = Joi.object({
        email: Joi.string().email().max(100).required(),
        password: Joi.string().min(4).max(100).required()
    });
    const {err} = schema.validate(req.body);
    if(err) {
        return (
            res.status(400)
            .json({massage:"Bad request",err})
        )
    }
    next();
}