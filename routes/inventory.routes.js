const router = require('express').Router();
const { registerInventory, getInventories, getInventory, inCreaseInventory, deleteInventory, decreaseInventory, getInventoryByType, getMedicineByWard, getInventoryByWard } = require('../controllers/inventory.controller');

router.post("/", registerInventory);
router.get("/", getInventories);
router.get("/:id", getInventory);
router.get("/ward/:id", getMedicineByWard);
router.get("/ward/inventory/:id", getInventoryByWard);
router.put("/increase/:id", inCreaseInventory);
router.put("/decrease/:id", decreaseInventory);
router.delete("/:id", deleteInventory);

module.exports = router;