const router = require('express').Router();
const { registerHospital, getHospitals, getHospital, updateHospital, deleteHospital } = require('../controllers/hospital.controller');

router.post("/", registerHospital);
router.get("/", getHospitals);
router.get("/:id", getHospital);
router.put("/:id", updateHospital);
router.delete("/:id", deleteHospital);

module.exports = router;