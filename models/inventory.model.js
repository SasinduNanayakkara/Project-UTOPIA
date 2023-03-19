const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    serial_number: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['drugs', 'inventory', 'surgical']    
    },
    quantity: {
        type: Number,
        required: true,
    },
    ward: {
        type: Schema.Types.ObjectId,
        ref: 'Ward'
    },

}, {timestamps: true});

const Inventory = mongoose.model('inventory', InventorySchema);
module.exports = Inventory;