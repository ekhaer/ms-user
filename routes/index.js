const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const users = require('./userRoute');
const validate = require('./validateRoute');


router.use('/validate', validate);
// router.use(authentication);   //have to pass the authentication first before hitting the endpoints below
router.use('/users', users);

module.exports = router;