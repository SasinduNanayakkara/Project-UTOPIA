const Nurse = require('../models/nurse.model');
const bcryptjs = require('bcryptjs');

const registerNurse = async (req, res) => {
    const { first_name, last_name, NIC, email, username, password, role, hospitalID, ward, timeSlot} = req.body;
    try {
        const salt = await bcryptjs.genSalt(5);
        const encryptedPassword = await bcryptjs.hash(password, salt);
        const userExist = await Nurse.findOne({username: username});
        if (userExist) {
            return res.status(400).send('User already exists');
        }
        else {
            const nurse = new Nurse({
                first_name,
                last_name,
                NIC,
                email,
                username,
                password: encryptedPassword,
                role,
                hospitalID,
                ward,
                timeSlot
            });
            const savedNurse = await nurse.save();
            if (savedNurse) {
                res.status(201).send(savedNurse);
            }
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

const getNursesByWard = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Nurse.find({ward: id});
        if (response) {
            res.status(200).send(response);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const updateNurse = async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, NIC, email, username, password, role, hospitalID, ward, timeSlot} = req.body;
    try {
        const updatedNurse = await Nurse.findByIdAndUpdate(id, {first_name, last_name, NIC, email, username, password, role, hospitalID, ward, timeSlot});
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

module.exports = {registerNurse, getNurses, getNurse, updateNurse, deleteNurse, getNursesByWard}