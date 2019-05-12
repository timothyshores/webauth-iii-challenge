const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/', usersRouter);

server.get('/', (req, res) => {
    res.send("Hello World!");
});

module.exports = server;
