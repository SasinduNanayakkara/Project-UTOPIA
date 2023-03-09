const router = require('express').Router();
const { registerPatient, getPatients, getPatient, updatePatient, deletePatient, getPatientByWard } = require('../controllers/patient.controller');

router.post("/", registerPatient);
router.get("/", getPatients);
router.get("/:id", getPatient);
router.get("/ward/:id", getPatientByWard);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);


module.exports = router;