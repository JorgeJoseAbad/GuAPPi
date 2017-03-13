'use strict';

var express = require('express');
var controller = require('./dog.controller');

var router = express.Router();
console.log("he llegado aqui a los perros");
router.post('/', controller.createDog);
router.get('/', controller.readDogs)
//router.get('/:id', controller.readDog);
//router.put('/:id', controller.editDog);
//router.delete('/:id', controller.deleteDog);

module.exports = router;
