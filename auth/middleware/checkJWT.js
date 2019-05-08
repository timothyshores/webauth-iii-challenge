const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || 'secret key is stored in .env file before production and .env is included in .gitignore'

    jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ error: "Invalid token" })
        } else {
            req.decodedToken = decodedToken;
            next();
        }
    });
};
