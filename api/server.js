const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!
const port = 3000;

const server = express()
// middleware
server.use(express.json());
server.use(express.urlencoded());

module.exports = server;
