const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wardPatientsSchema = new Schema({
    wardId: {
        type: Schema.Types.ObjectId,
        ref: 'ward'
    },
    hospitalId: {
        type: Schema.Types.ObjectId,
        ref: 'hospital'
    },
    patientId: [{
        type: Schema.Types.ObjectId,
        ref: 'patient'
    }],
}, {timestamps: true});

const WardPatients = mongoose.model('wardPatients', wardPatientsSchema);
module.exports = WardPatients;