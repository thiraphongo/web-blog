// รับรองความถูกต้อง
const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization']
    if(!auth){
        return res.status(403)
            .json({massage: 'ไม่ได้รับอนุญาต, ต้องใช้โทเค็น JWT'})
    }
}