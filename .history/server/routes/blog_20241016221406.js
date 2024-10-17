const express = require("express")
const router = express.Router()

const ensureAuthenticated = require('../middlewares/auth')

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        {
            name: "Jack",
            title: "test"
        }
    ])
})

module.exports = router;