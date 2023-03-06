const router = require('express').Router();
const { registerDoctor, getDoctors, getDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctor.controller');

router.post("/", registerDoctor);
router.get("/", getDoctors);
router.get("/:id", getDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;