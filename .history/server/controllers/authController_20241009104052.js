// Database
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    try {
        const { name, emsil, password } = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(400)
            .json({massage: 'มีผู้ใช้อยู่แล้ว คุณสามารถเข้าสู่ระบบได้'})
        }
        const userModel = new userModel({name,email,password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save()
    } catch (err) {

    }
}

module.exports = {
    register
}