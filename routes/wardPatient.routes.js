const { createWard, updateWardPatients, getWardPatients } = require('../controllers/WardPatient');

const router = require('express').Router();

router.post("/", createWard);
router.put("/:id", updateWardPatients);
router.get("/:id", getWardPatients);

module.exports = router;