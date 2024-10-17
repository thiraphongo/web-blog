const jwt = require('jsonwebtoken')


// รับรองความถูกต้อง
const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization']
    if(!auth){
        return res.status(403)
            .json({massage: 'ไม่ได้รับอนุญาต, ต้องใช้โทเค็น JWT'})
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403)
            .json({massage: 'ไม่ได้รับอนุญาต, โทเค็น JWT ผิดหรือหมดอายุ'})
    }
}