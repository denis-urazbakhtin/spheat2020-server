var express = require('express');
var router = express.Router();
const Temp= require('../models/temperature')
/* GET all temp list */
router.get('/', async function(req, res, next) {
    try {
        const temp = await Temp.find()
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(temp,null, 3));
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.post('/debug', async function(req, res, next) {
    try {
        const weeks=req.body.week
        // Unpack week
        if (weeks.length===2){
            var week_rest = week
        }else{
            var week_rest =[weeks,weeks]
        }
        // Unpack temperature
        const temps=req.body.temperature
        if (temps.length==2){
            var temps_rest = temps
        }else{
            var temps_rest = [temps,temps]
        }
        // Define restrictions for search
        var body_search={
            $and:[
                {temperature :{$gte :  temps_rest [0]}},
                {temperature :{$lte :  temps_rest [1]}},
                {date_week :{$gte :  week_rest [0]}},
                {date_week :{$lte :  week_rest [1]}},

            ]
        }
        const temp = await Temp.find(body_search)
        res.json(temp)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.post('/', async function(req, res, next) {
    try {
        const subscribers = await Temp.insertMany(req.body,function(error, docs) {})
        res.send('Good, data was received' );
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

module.exports = router;