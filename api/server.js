const express = require("express");
const CarsRouter = require("../cars/carsRouter")
// const PostRouter = require("./PostRouter")

const db = "../data/car-dealer.db3";

const server = express();

server.use(express.json());
// server.use('/api/posts', PostRouter)
server.get('/', (req,res) => {
    res.status(200).json({message:"welsome to da server"})
})

server.use('/api/cars', CarsRouter)


module.exports = server;