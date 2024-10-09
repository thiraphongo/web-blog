const express = require("express")
const router = express.Router()


const { login,register } = require('../controllers/authController')

const {registerValidertion} = require('../middlewares/authValidation')

router.post('/login', login)

router.post('/register', registerValidertion, register);


module.exports = router