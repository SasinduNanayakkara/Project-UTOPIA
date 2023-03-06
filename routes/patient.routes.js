const router = require('express').Router();
const { registerPatient, getPatients, getPatient, updatePatient, deletePatient } = require('../controllers/patient.controller');

router.post("/", registerPatient);
router.get("/", getPatients);
router.get("/:id", getPatient);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

module.exports = router;