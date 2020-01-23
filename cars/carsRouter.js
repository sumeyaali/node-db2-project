const express = require('express');

const router = express.Router();

const Cars = require("./carsModel");



router.get("/", (req,res) => {

    Cars.get()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({error: "Failed to fetch cars data"})
    })
})

router.get('/:id', (req,res) => {
    Cars.findtById(req.params.id)
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({error: "Failed to fetch cars data"})
    })
})

router.post('/', (req, res) => {
    const carData = req.body
    Cars.insert(carData)
    .then(id => {
        res.status(201).json({ created: id });
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new car' });
      });
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Cars.update(id, changes)
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(errors => {
        res.status(500).json({ message: 'Failed to update existing car' });
    })
})









module.exports = router;