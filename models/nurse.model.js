const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nurseSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
    },
    NIC: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'nurse'
    },
    hospitalID: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    ward: {
        type: Schema.Types.ObjectId,
        ref: 'Ward'
    },
    timeSlot: {
        type: String,
        required: true
    },

}, {timestamps: true});

const Nurse = mongoose.model('nurse', nurseSchema);
module.exports = Nurse;