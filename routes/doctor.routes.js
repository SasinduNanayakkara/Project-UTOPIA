const router = require('express').Router();
const { registerDoctor, getDoctors, getDoctor, updateDoctor, deleteDoctor, getDoctorsByHospital } = require('../controllers/doctor.controller');

router.post("/", registerDoctor);
router.get("/", getDoctors);
router.get("/:id", getDoctor);
router.get("/hospital/:id", getDoctorsByHospital);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;