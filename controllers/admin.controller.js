const Admin = require('../models/admin.model');

const registerAdmin = async (req, res) => {
    const {name, username, password} = req.body;
    const admin = new Admin({
        name,
        username,
        password
    });
    try {
        const savedAdmin = await admin.save();
        if (savedAdmin) {
            res.status(201).send(savedAdmin);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}