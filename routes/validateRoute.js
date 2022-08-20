const express = require('express');
const router = express.Router();
const ValidateController = require('../controllers/validateController')


router.post('/', ValidateController.isValid)

module.exports = router;
