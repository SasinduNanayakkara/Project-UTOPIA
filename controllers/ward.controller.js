const Ward = require('../models/ward.model');

const registerWard = async (req, res) => {
    const { name, hospitalID, no_of_beds} = req.body;
    const ward = new Ward({
        name,
        hospitalID,
        no_of_beds
    });
    try {
        const savedWard = await ward.save();
        if (savedWard) {
            res.status(201).send(savedWard);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getWards = async (req, res) => {
    try {
        const wards = await Ward.find();
        if (wards) {
            res.status(200).send(wards);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getWard = async (req, res) => {
    const id = req.params.id;
    try {
        const ward = await Ward.findById(id);
        if (ward) {
            res.status(200).send(ward);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getWardByHospitalID = async (req, res) => {
    const hospitalID = req.params.id;
    try {
        const ward = await Ward.find({hospitalID : hospitalID});
        if (ward) {
            res.status(200).send(ward);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const updateWard = async (req, res) => {
    const id = req.params.id;
    const { name, hospitalID, no_of_beds} = req.body;
    try {
        const updatedWard = await Ward.findByIdAndUpdate(id, {name, hospitalID, no_of_beds});
        if (updatedWard) {
            res.status(200).send(updatedWard);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const deleteWard = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedWard = await Ward.findByIdAndDelete(id);
        if (deletedWard) {
            res.status(200).send(deletedWard);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {registerWard, getWards, getWard, updateWard, deleteWard, getWardByHospitalID}