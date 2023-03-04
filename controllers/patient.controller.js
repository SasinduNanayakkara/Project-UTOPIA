const Patient = require('../models/patient.model');

const registerPatient = async (req, res) => {
    const {name, NIC, blood_type, gender, status, admit_date, discharge_date, ward  } = req.body;
    const patient = new Patient({
        name,
        NIC,
        blood_type,
        gender,
        status,
        admit_date,
        discharge_date,
        ward
    });
    try {
        const savedPatient = await patient.save();
        if (savedPatient) {
            res.status(201).send(savedPatient);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        if (patients) {
            res.status(200).send(patients);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getPatient = async (req, res) => {
    const id = req.params.id;
    try {
        const patient = await Patient.findById(id);
        if (patient) {
            res.status(200).send(patient);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const updatePatient = async (req, res) => {
    const id = req.params.id;
    const {name, NIC, blood_type, gender, status, admit_date, discharge_date, ward  } = req.body;
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(id, {name, NIC, blood_type, gender, status, admit_date, discharge_date, ward});
        if (updatedPatient) {
            res.status(200).send(updatedPatient);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const deletePatient = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedCustomer = await Patient.findByIdAndDelete(id);
        if (deletedCustomer) {
            res.status(200).send(deletedCustomer);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {registerPatient, getPatients, getPatient, updatePatient, deletePatient}