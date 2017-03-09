var path = require('path');

module.exports = function(app) {

  app.use('/api/user', require('../api/user')); //por defecto se va al index.js
  app.use('/api/pet', require('../api/pet'));
  app.use('/api/dog', require('../api/dog')); //por defecto se va al index.js
  app.use('/api/cat', require('../api/cat'));
  app.use('/api/kgarten', require('../api/kgarten'));

	// catch 404 and forward to Angular
  app.all('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};





/*

var express = require('express');
var router = express.Router();

GET home page.  esta ruta funcionaba para abrir back-end

router.get('/', function(req, res, next) {
  res.render('index', { title: 'GuAPPi' });
});

module.exports = router;
*/
