const express = require("express")
const router = express.Router()


const { register } = require('../controllers/authController')

const { registerValidation } = require('../middlewares/authValidation')

// router.post('/login', login)

router.post('/register', registerValidation, register);

module.exports = router