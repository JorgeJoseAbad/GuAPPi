const express            = require('express');
const path               = require('path');
const favicon            = require('serve-favicon');
const logger             = require('morgan');
const cookieParser       = require('cookie-parser');
const bodyParser         = require('body-parser');
const expressLayouts     = require('express-ejs-layouts');
const mongoose           = require('mongoose');
const passport           = require('passport');
const session            = require('express-session');
const MongoStore         = require('connect-mongo')(session);
const authController     = require("./routes/auth-controller");
const cors               = require('cors');
require("dotenv").config();


const app = express();

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components/')));
app.use(express.static(path.join(__dirname, 'public')));

//mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
console.log("connecting to mongo: ");


require('./routes/index')(app);


require('./config/passport')(passport);


var index = require('./routes/index');
var users = require('./routes/users');
//var images = require('./public/images');


var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
//ojo, cambio credentials de true a false

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.set('layout', 'layouts/main-layout');
app.use(expressLayouts);


// Passport config
app.use(session({
  secret: "passport-local-strategy",
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/public/images/snoopy222.jpg', function(req, res, next) {
  res.sendFile(__dirname + '/public/images/snoopy222.jpg');
  //res.send('respond with a resource');
});


//app.use('/public', users);
app.use('/api',index); //incluyo esto para seguir la ruta
app.use('/', authController);

app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
