// Database
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(400)
            .json({massage: 'มีผู้ใช้อยู่แล้ว คุณสามารถเข้าสู่ระบบได้'})
        }
        const UserModel = new userModel({name,email,password});
        UserModel.password = await bcrypt.hash(password, 10);
        await UserModel.save()
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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        const errorMsg = 'การตรวจสอบสิทธิ์ล้มเหลวอีเมลหรือรหัสผ่านไม่ถูกต้อง';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "เข้าสู่ระบบสำเร็จ",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "ข้อผิดพลาดเซิร์ฟเวอร์ภายใน",
                success: false
            })
    }
}

module.exports = {
    register,
    login
}