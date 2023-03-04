const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    serial_number: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },

}, {timestamps: true});

const Inventory = mongoose.model('inventory', InventorySchema);
module.exports = Inventory;