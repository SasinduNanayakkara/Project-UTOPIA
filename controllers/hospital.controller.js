const Hospital = require('../models/hospital.model');

const registerHospital = async (req, res) => {
    const { name, location, director, director_NIC, no_of_wards} = req.body;
    const hospital = new Hospital({
        name,
        location,
        director,
        director_NIC,
        no_of_wards
    });
    try {
        const savedHospital = await hospital.save();
        if (savedHospital) {
            res.status(201).send(savedHospital);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        if (hospitals) {
            res.status(200).send(hospitals);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getHospital = async (req, res) => {
    const id = req.params.id;
    try {
        const hospital = await Hospital.findById(id);
        if (hospital) {
            res.status(200).send(hospital);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const updateHospital = async (req, res) => {
    const id = req.params.id;
    const { name, location, director, director_NIC, no_of_wards} = req.body;
    try {
        const updatedHospital = await Hospital.findByIdAndUpdate(id, {name, location, director, director_NIC, no_of_wards});
        if (updatedHospital) {
            res.status(200).send(updatedHospital);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const deleteHospital = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedHospital = await Hospital.findByIdAndDelete(id);
        if (deletedHospital) {
            res.status(200).send(deletedHospital);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {registerHospital, getHospitals, getHospital, updateHospital, deleteHospital}