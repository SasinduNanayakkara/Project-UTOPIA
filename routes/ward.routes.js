const router = require('express').Router();
const { registerWard, getWards, getWard, updateWard, deleteWard, getWardByHospitalID } = require('../controllers/ward.controller');

router.post("/", registerWard);
router.get("/", getWards);
router.get("/:id", getWard);
router.get("/hospital/:id", getWardByHospitalID);
router.put("/:id", updateWard);
router.delete("/:id", deleteWard);

module.exports = router;