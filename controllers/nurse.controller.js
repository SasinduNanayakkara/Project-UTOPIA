const Nurse = require('../models/nurse.model');

const registerNurse = async (req, res) => {
    const { first_name, last_name, email, username, password, role, hospitalID, ward, timeSlot} = req.body;
    const nurse = new Nurse({
        first_name,
        last_name,
        email,
        username,
        password,
        role,
        hospitalID,
        ward,
        timeSlot
    });
    try {
        const savedNurse = await nurse.save();
        if (savedNurse) {
            res.status(201).send(savedNurse);
        }
    }
    catch (err) {
        res.status(500).send(err);

    }
}

const getNurses = async (req, res) => {
    try {
        const nurses = await Nurse.find();
        if (nurses) {
            res.status(200).send(nurses);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getNurse = async (req, res) => {
    const id = req.params.id;
    try {
        const nurse = await Nurse.findById(id);
        if (nurse) {
            res.status(200).send(nurse);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const updateNurse = async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, email, username, password, role, hospitalID, ward, timeSlot} = req.body;
    try {
        const updatedNurse = await Nurse.findByIdAndUpdate(id, {first_name, last_name, email, username, password, role, hospitalID, ward, timeSlot});
        if (updatedNurse) {
            res.status(200).send(updatedNurse);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const deleteNurse = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedNurse = await Nurse.findByIdAndDelete(id);
        if (deletedNurse) {
            res.status(200).send(deletedNurse);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {registerNurse, getNurses, getNurse, updateNurse, deleteNurse}