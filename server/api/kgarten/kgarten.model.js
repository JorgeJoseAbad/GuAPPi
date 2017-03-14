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
    required: false, //indice relacional adoptante
  },
  dog_id: {
    type: Schema.Types.ObjectId,
    ref: 'Dog', // referencia al animal
    required: false, //indice relacional animal
  },
  coordinates: {
  	lat: {
           type: Number,
           required: false,
           default: 41.3977381,
         },
  	lng: {
            type: Number,
            required: false,
            default: -3.190471916,
          },
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
