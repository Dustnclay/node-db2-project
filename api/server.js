const express = require("express");
const helmet = require("helmet");

const carsRouter = require("../cars/carsRouter");

const server = express();

server.use(helmet());
server.use(express.json());
// server.use('/api', carsRouter)
server.use('/api/cars', carsRouter);
server.get('/', (req,res) => {
    res.status(200).json({message:"welsome to da server"})
})
 
module.exports = server; 