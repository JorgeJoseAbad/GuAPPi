'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kgartenSchema = new mongoose.Schema({

  userProp_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true, //indice relacional propietario
  },
  userAdopt_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true, //indice relacional adoptante
  },
  pet_id: {
    type: Schema.Types.ObjectId,
    ref: 'Pet', // referencia al animal
    required: false, //indice relacional animal
  },
  dog_id: {
    type: Schema.Types.ObjectId,
    ref: 'Dog', // referencia al animal
    required: false, //indice relacional animal
  },
  cat_id: {
    type: Schema.Types.ObjectId,
    ref: 'Cat', // referencia al animal
    required: false, //indice relacional animal
  },

   dateInit:{
     type: Date,
     required: true
   },

   dateEnd:{
     type: Date,
     required: true
   },
 },{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Kgarten', kgartenSchema);
