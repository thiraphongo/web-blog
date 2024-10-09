// Database
const userModel = require('../models/userModel');
const user = require('../models/userModel')

const register = async (req, res) => {
    try {
        const { name, emsil, password } = req.body;
        const user = await userModel.findOne({email});
    } catch (err) {

    }
}

module.exports = {
    register
}