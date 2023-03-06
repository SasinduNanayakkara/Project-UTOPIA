const router = require('express').Router();
const { registerInventory, getInventories, getInventory, inCreaseInventory, deleteInventory, decreaseInventory } = require('../controllers/inventory.controller');

router.post("/", registerInventory);
router.get("/", getInventories);
router.get("/:id", getInventory);
router.put("/increase/:id", inCreaseInventory);
router.put("/decrease/:id", decreaseInventory);
router.delete("/:id", deleteInventory);

module.exports = router;