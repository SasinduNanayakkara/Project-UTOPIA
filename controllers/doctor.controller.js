const bcryptjs = require('bcryptjs');
const User = require('../models/doctor.model');

const registerDoctor = async (req, res) => {

    const { first_name, last_name, email, username, password, role, specialization, hospitalID, NIC} = req.body;
    try {
        const salt = await bcryptjs.genSalt(5);
        const encryptedPassword = await bcryptjs.hash(password, salt);
        const userExist = await User.findOne({username: username});
        if (userExist) {
            return res.status(400).send('User already exists');
        }
        else {
            const user = new User({
                first_name,
                last_name,
                email,
                username,
                password: encryptedPassword,
                role,
                specialization,
                hospitalID,
                NIC
            });
            const savedUser =  await user.save();
            if (savedUser) {
                res.status(201).send(savedUser);
            }
        }
        }
    catch (err) {
        res.status(500).send(err);
    }
}

const getDoctors = async (req, res) => {
    try {
        const doctors = await User.find();
        if (doctors) {
            res.status(200).send(doctors);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await User.findById(id);
        if (doctor) {
            res.status(200).send(doctor);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const updateDoctor = async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, email, username, password, role, specialization, hospitalID, NIC} = req.body;
    try {
        const updatedDoctor = await User.findByIdAndUpdate(id, {first_name, last_name, email, username, password, role, specialization, hospitalID});
        if (updatedDoctor) {
            res.status(200).send(updatedDoctor);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedDoctor = await User.findByIdAndDelete(id);
        if (deletedDoctor) {
            res.status(200).send(deletedDoctor);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {registerDoctor, getDoctors, getDoctor, updateDoctor, deleteDoctor}