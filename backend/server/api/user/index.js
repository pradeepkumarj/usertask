'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/all', controller.index);
router.get('/me', auth.isAuthenticated(), controller.me);
router.post('/save/user', controller.create);

module.exports = router;
