const mongoose = require('mongoose')

const temperatureSchema = new mongoose.Schema({
    temperature: {
        type: Number,
        required: true
    },
    date: {type: Date, default: Date.now},
    date_week: {
        type: Number,
        default: function () {
            const birthday = new Date();
            const day1 = birthday.getDay();
            return day1
        }

        }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('temperature', temperatureSchema )