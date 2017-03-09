'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.post('/', controller.createUser);
router.get('/:id',controller.readUser);
//router.put('/:id', controller.editUser);
//router.delete('/:id', controller.removeUser);

module.exports = router;
