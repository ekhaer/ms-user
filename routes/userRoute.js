const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')


router.get('/', UserController.findAll)
router.get('/:id', UserController.findOne)
router.put('/:id', UserController.update)
router.post('/', UserController.add)
router.delete('/:id', UserController.delete)

module.exports = router;
