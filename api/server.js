const express = require("express");
// const PostRouter = require("./PostRouter")

const db = require("../data/car-dealer.db3");

const server = express();

server.use(express.json());
// server.use('/api/posts', PostRouter)



module.exports = server;