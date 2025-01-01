const express = require('express')
const {registerUser,loginUser}= require('../controller/auth-controller');
const router = express.Router();

// all routes related to authentication and autherizations
router.post('/register',registerUser);
router.post('/login',loginUser);


module.exports = router