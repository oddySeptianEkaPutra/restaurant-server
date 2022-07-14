"use strict"

const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

router.get('/register', UserController.register);

module.exports = router;