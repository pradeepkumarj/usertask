'use strict';

var express = require('express');
var controller = require('./tasks.controller');
var auth = require('../../auth/auth.service')
var router = express.Router();

router.post('/',auth.isAuthenticated(), controller.create);
router.post('/updatetask',auth.isAuthenticated(),controller.update);
router.get('/getTask',auth.isAuthenticated(),controller.index);
router.get('/getexpiredTask',auth.isAuthenticated(),controller.getExpiredTask);
router.delete('/:id',auth.isAuthenticated(), controller.destroy);

module.exports = router;