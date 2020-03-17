const mongoose = require('mongoose')

const locationsSchema = new mongoose.Schema({
    gps: {
        type: Array,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }}, {
    versionKey: false // You should be aware of the outcome after set to false
});


module.exports = mongoose.model('locations', locationsSchema )