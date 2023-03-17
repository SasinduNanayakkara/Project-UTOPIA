const WardPatients = require('../models/wardPatients');

const createWard = async (req, res) => {
    const { wardId, hospitalId } = req.body;
    try {
        const ward = new WardPatients({
            wardId,
            hospitalId,
        });
        await ward.save();
        res.status(200).json(ward);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateWardPatients = async (req, res) => {
    const id = req.params.id;
    const { patientId } = req.body;
    try {
        const ward = await WardPatients.findOne({wardId: id});
        console.log("1");
        console.log(ward);
        if (ward) {
            ward.patientId.push(patientId);
            await ward.save();
            res.status(200).json(ward);
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}

const getWardPatients = async (req, res) => {
    const id = req.params.id;
    try {
        const ward = await WardPatients.find({hospitalId: id})
        .populate('patientId');
        if (ward) {
            res.status(200).json(ward);
        }
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {createWard, updateWardPatients, getWardPatients};