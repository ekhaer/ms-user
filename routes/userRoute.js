const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
const { authAdmin, authUser } = require('../middlewares/authorization');


router.use('/:id', authUser)
router.get('/:id', UserController.findOne)

router.use('/:id', authAdmin)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

router.use('/', authAdmin)
router.post('/', UserController.add)
router.get('/', UserController.findAll)

module.exports = router;