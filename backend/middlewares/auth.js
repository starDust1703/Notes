const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(401)
        .json({
            message: "Unauthorized, JWToken is required"
        })
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_secret);
        req.user = decoded;
        next();
    }catch(err) {
        return res.status(401)
        .json({
            message: "Unauthorized, JWToken wrong or expired"
        })
    }
}

module.exports = ensureAuthenticated;