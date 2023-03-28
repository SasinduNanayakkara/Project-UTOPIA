const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor.model');
const Nurse = require('../models/nurse.model');
const Admin = require('../models/admin.model');

const passwordValidationFunc = async (password, encryptedPassword) => {
    const passwordValidation = await bcrypt.compare(password, encryptedPassword);
    if(!passwordValidation) {
        res.status(400).send({message: "Wrong password"});
    }
    else {
        return passwordValidation;
    }
}

const login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const isDoctor = await Doctor.findOne({username});
        const isNurse = await Nurse.findOne({username});
        const isAdmin = await Admin.findOne({username});
        if (isDoctor) {
            const passwordValidation = await passwordValidationFunc(password, isDoctor.password);
            if (passwordValidation) {
                const token = await jwt.sign({_id: isDoctor._id}, process.env.TOKEN_SECRET);
                res.header('auth-token', token).send({token: token, data: isDoctor});
            }
        }
        else if (isNurse) {
            const passwordValidation = await passwordValidationFunc(password, isNurse.password);
            if (passwordValidation) {
                const token = await jwt.sign({_id: isNurse._id}, process.env.TOKEN_SECRET);
                res.header('auth-token', token).send({token: token, data: isNurse});
            }
        }
        else if (isAdmin) {
            if (password === isAdmin.password) {
                const token = await jwt.sign({_id: isAdmin._id}, process.env.TOKEN_SECRET);
                 return res.header('auth-token', token).send({token: token, data: isAdmin});
            }
            else {
               return  res.status(400).send({message: "Wrong password"});
            }
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (err) {
        res.send(err);
    }
}

module.exports = {login}