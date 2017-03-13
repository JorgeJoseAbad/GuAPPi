
const Q = require('q');
const _ = require('lodash');
mongoose = require('mongoose');
const dogModel = require('./dog.model');

//bodyparser.json()

console.log("he llegado a controlador de chuhos");


exports.createDog = function(req, res, next) {
	console.log(req.body);
	var item = new dogModel({
	    dogName: req.body.dogName,
      breed: req.body.breed,
      age:req.body.age,
      description:req.body.description,

	});

	Q.nfcall(item.save.bind(item))
        .then(function () {
						console.log(item);
            res.json({
                _id: item._id,
                dogName: item.dogName,
                breed: item.breed,
                age: item.age,
                created_at:item.created_at,
                updated_at: item.updated_at
            });
        });
};

/*
exports.createList = function(req, res, next) {
	var item = new listModel({
	    title: req.body.title,
        position: req.body.position
	});

	Q.nfcall(item.save.bind(item))
        .then(function () {
            res.json({
                _id: item._id,
                title: item.title,
                position: item.position,
                cards: []
            });
        });
};
*/
