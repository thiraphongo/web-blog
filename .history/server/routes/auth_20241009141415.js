const express = require("express")
const router = express.Router()


const { login, register } = require('../controllers/authController')

const { loginValidation, registerValidation } = require('../middlewares/authValidation')

router.post('/login', loginValidation, login)

router.post('/register', registerValidation, register);

module.exports = router