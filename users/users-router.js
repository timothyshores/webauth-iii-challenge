const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./users-model.js');

router.post('/register', (req, res) => {
    let user = req.body;
    let {username, password, department} = user;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    if (user && username && password && department) {
        Users.add(user)
            .then(saved => {
                res.status(201).json(saved);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    } else {
        res.status(500).json({ message: "User requires a username, password and department" });
    }
});

module.exports = router;
