const router = require('express').Router();
const {registerAdmin} = require('../controllers/admin.controller');
router.post('/', registerAdmin);

module.exports = router;