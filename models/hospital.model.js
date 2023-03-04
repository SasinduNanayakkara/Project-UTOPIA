const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    director_NIC : {
        type: String,
        required: true,
    },
    no_of_wards: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const Hospital = mongoose.model('hospital', HospitalSchema);
module.exports = Hospital;