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

module.exports = {
    register
}