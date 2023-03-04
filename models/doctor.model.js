const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role : {
        type: String,
        required: true,
        default: 'doctor'
    },
    specialization: {
        type: String,
        required: true,
    },
    hospitalID: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    NIC : {
        type: String,
        required: true,
    }
}, {timestamps: true});

const User = mongoose.model('user', UserSchema);
module.exports = User;