const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./users-model.js');
const checkJWT = require('../auth/middleware/checkJWT.js');

router.post('/register', (req, res) => {
    let user = req.body;
    let { username, password, department } = user;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    if (user && username && password && department) {
        Users.add(user)
            .then(saved => {
                const token = generateToken(user);
                res.status(201).json({ saved, token });
            })
            .catch(error => {
                res.status(500).json(error);
            });
    } else {
        res.status(500).json({ message: "User requires a username, password and department" });
    }
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token,
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            console.log('error', error);
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    };

    const options = {
        expiresIn: '1h'
    }

    const secret = process.env.JWT_SECRET || 'secret key is stored in .env file before production and .env is included in .gitignore'

    return jwt.sign(payload, secret, options)
}

router.get('/users', checkJWT, (req, res) => {
    Users.find()
        .then(users => {
            const filteredUsers = users.filter(user => user.department === req.decodedToken.department)
            res.json(filteredUsers);
        })
        .catch(err => res.send(err));
});

module.exports = router;
