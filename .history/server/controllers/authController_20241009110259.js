// Database
const UserModel = require("../models/userModel");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(400)
            .json({massage: 'มีผู้ใช้อยู่แล้ว คุณสามารถเข้าสู่ระบบได้'})
        }
        const userModel = new UserModel({name,email,password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save()
        res.status(201)
        .json({
            massage:'ลงทะเบียนสำเร็จ',
            success:true
        })
    } catch (err) {
        res.status(500)
        .json({
            massage:'ข้อผิดพลาดเซิร์ฟเวอร์ภายใน',
            success:false
        })
    }
}

module.exports = {
    register
}