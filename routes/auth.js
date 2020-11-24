const express = require('express');
const User = require('../models/user');
const AuthController = require('../controllers/auth');

const router = express.Router();

router.post('/signup', AuthController.createUser);

router.post('/login', AuthController.userLogin);

module.exports = router;