const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true,
    },
    blood_type: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    status: {
        type: String,
        enum: ['admitted', 'discharged', 'dead', 'transferred', 'missing']
    },
    admit_date: {
        type: Date,
        required: true,
    },
    discharge_date: {
        type: Date,
        required: false,
    },
    ward: {
        type: Schema.Types.ObjectId,
        ref: 'Ward',
        required: false,
    },

}, {timestamps: true});

const Patient = mongoose.model('patient', PatientSchema);
module.exports = Patient;