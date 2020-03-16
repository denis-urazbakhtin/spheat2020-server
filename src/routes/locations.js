var express = require('express');
var router = express.Router();
const Locations = require('../models/locations')
const mongoose = require('mongoose')
router.get('/', async (req, res) => {
    try {
        const locations = await Locations.find()
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(locations,null, 3));
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

router.get('/:id', async (req, res) => {

    try {
        const locations = await Locations.find({_id: new mongoose.Types.ObjectId(req.params.id)})
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(locations,null, 3));
    } catch (err) {
        res.status(500).json({ message: err.message })
    }


})

router.post('/', async (req, res) => {
    try {
        const subscribers = await Temp.insertMany(req.body,function(error, docs) {})
        res.send('Good, data was received' );
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

module.exports = router;