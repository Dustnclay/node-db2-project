const express = require("express")
const router = express.Router();
const db = '../data/car-dealer.db3'

router.get('/',(req,res) => {
    res.status(200).json({message:"rouer access granted"})
})