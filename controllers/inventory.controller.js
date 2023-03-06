const Inventory = require('../models/inventory.model');

const registerInventory = async (req, res) => {
    const { serial_number, quantity} = req.body;
    const inventory = new Inventory({
        serial_number,
        quantity,
    });
    try {
        const savedInventory = await inventory.save();
        if (savedInventory) {
            res.status(201).send(savedInventory);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find();
        if (inventories) {
            res.status(200).send(inventories);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getInventory = async (req, res) => {
    const id = req.params.id;
    try {
        const inventory = await Inventory.findById(id);
        if (inventory) {
            res.status(200).send(inventory);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const inCreaseInventory = async (req, res) => {
    const id = req.params.id;
    const { quantity} = req.body;
    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(id, {quantity: quantity});
        if (updatedInventory) {
            res.status(200).send(updatedInventory);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const deCreaseInventory = async (req, res) => {
    const id = req.params.id;
    try {
        const inventory = await Inventory.findById(id);
        if (inventory) {
            const updatedInventory = await Inventory.findByIdAndUpdate(id, {quantity: inventory.quantity - 1});
            if (updatedInventory) {
                res.status(200).send(updatedInventory);
            }
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const deleteInventory = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedInventory = await Inventory.findByIdAndDelete(id);
        if (deletedInventory) {
            res.status(200).send(deletedInventory);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {registerInventory, getInventories, getInventory, inCreaseInventory, deCreaseInventory, deleteInventory}