
const Q = require('q');
const _ = require('lodash');
mongoose = require('mongoose');
const dogModel = require('./dog.model');



console.log("he llegado a controlador de chuhos");


exports.createDog = function(req, res, next) {
	console.log(req.body);
	var item = new dogModel({
	    dogName: req.body.dogName,
      breed: req.body.breed,
      age:req.body.age,
      description:req.body.description,
			latitude:req.body.latitude,
			longitude:req.body.longitude

	});
	console.log(item);
	Q.nfcall(item.save.bind(item))
        .then(function () {
						console.log(item);
            res.json({
                _id: item._id,
								user_id: item.user_id,
                dogName: item.dogName,
                breed: item.breed,
                age: item.age,
								latitude: item.latitude,
								longitude: item.longitude,
                created_at:item.created_at,
                updated_at: item.updated_at
            });
        });
};


exports.readDogs=function(req,res,next){
	  	dogModel.find({}, function(err, dogs) {
		 	if (err) {
		 		return res.json(err);
		 	}
			return res.json(dogs);
	  	});

};

exports.readDog=function(req,res,next){
			console.log(req.params.id);
	  	dogModel.find({_id:req.params.id}, function(err, dog) {
				if (err) {
					return res.json(err);
				}
				return res.json(dog);
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
