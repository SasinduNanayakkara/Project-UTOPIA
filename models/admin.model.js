const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    },
    hospitalID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: false,
    }
}, {timestamps: true});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;