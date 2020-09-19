const express = require("express");
const knex = require('knex')
const db = require('../data/db-configure')

const router = express.Router();

router.get('/',(req,res) => {
    db('cars').then(car => {
        res.status(200).send(car)
    }).catch( err => {
        res.status(500).json({message:"router access denied"})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('cars').where({ id }).first()
      .then(fruit => {
        res.json(fruit);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve fruit' });
      });
  });
// router.get('/:id',(res,req) => {
//      console.log(req.IncomingMessage)   
//     const le = req.params
 
//     db('cars').where( le ).first()
//         .then( car => {
//             res.json(car);
//         }).catch( err => {
//             res.status(500).json({message:"failed to retrieve cars"})
//         })
// })

router.post('/', (req,res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids =>{
        db('cars').where({ id: ids[0]})
            .then(newCar => {
                res.status(201).json(newCar);
            });
    } ).catch(err =>{
        console.log('carsrouter errors:',err);
        res.status(500).json({ message:"failed to store data"})
    })
})

module.exports = router