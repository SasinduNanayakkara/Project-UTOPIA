const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: false,
    },
    blood_type: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    pulse: {
        type: String,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
    },
    height: {
        type: Number,
        required: false,
    },
    complain: {
        type: String,
        required: false,
    },
    medical_history: {
        type: String,
        required: false,
    },
    surgical_history: {
        type: String,
        required: false,
    },
    food_allergies: {
        type: String,
        required: false,
    },
    drug_allergies: {
        type: String,
        required: false,
    },
    guardian_Details: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['admitted', 'discharged', 'dead', 'transferred', 'missing'],
        default: 'admitted'
    },
    admit_date: {
        type: Date,
        required: true,
        default: Date.now
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