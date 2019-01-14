const express = require('express');
const router = express.Router();
const fightersController = require('../controllers/fighters')

/* GET home page. */
router.get('/', fightersController.index);

module.exports = router;