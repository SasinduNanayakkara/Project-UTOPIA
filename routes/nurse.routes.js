const router = require('express').Router();
const { registerNurse, getNurses, getNurse, updateNurse, deleteNurse, getNursesByWard } = require('../controllers/nurse.controller');

router.post("/", registerNurse);
router.get("/", getNurses);
router.get("/:id", getNurse);
router.get("/ward/:id", getNursesByWard);
router.put("/:id", updateNurse);
router.delete("/:id", deleteNurse);

module.exports = router;