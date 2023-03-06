const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) { 
        return res.status(401).send('Access Denied');
    }
    else{
        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = verified;
            next();
        }
        catch (err) {
            return res.status(401).send('Access Denied');
        }
    }
}

module.exports = auth;