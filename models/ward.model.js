const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    hospitalID: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    no_of_beds: {
        type: Number,
        required: true,
    },

}, {timestamps: true});

const Ward = mongoose.model('ward', WardSchema);
module.exports = Ward;