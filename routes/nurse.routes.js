const router = require('express').Router();
const { registerNurse, getNurses, getNurse, updateNurse, deleteNurse } = require('../controllers/nurse.controller');

router.post("/", registerNurse);
router.get("/", getNurses);
router.get("/:id", getNurse);
router.put("/:id", updateNurse);
router.delete("/:id", deleteNurse);

module.exports = router;