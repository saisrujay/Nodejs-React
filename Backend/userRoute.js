const express = require('express');
const router = express.Router();
const {userRegister, getDetails, getDetails1, getDetails2, getDetails3, getDetails4} = require('./userController');

router.post('/register', userRegister);
router.get('/getdetails', getDetails);
router.get('/getdetails1', getDetails1);
router.get('/getdetails2', getDetails2);
router.get('/getdetails3', getDetails3);
router.get('/getdetails4', getDetails4);

module.exports = router;
