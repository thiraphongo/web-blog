// Database
const userModel = require('../models/userModel');
const user = require('../models/userModel')

const register = async (req, res) => {
    try {
        const { name, emsil, password } = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(400)
            .json({massage: 'มีผู้ใช้อยู่แล้ว คุณสามารถเข้าสู่ระบบได้'})
        }
    } catch (err) {

    }
}

module.exports = {
    register
}