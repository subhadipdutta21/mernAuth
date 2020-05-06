const jwt = require('jsonwebtoken')
const config = require('config')

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) res.status(401).send('Access Denied')
    else {
        try {
            const verified = jwt.verify(token, config.get('jwtSecret'))
            console.log(verified)
            if (verified) next()
        } catch (error) {
            res.status(400).send('invalid token')
        }
    }
}

module.exports = verifyToken