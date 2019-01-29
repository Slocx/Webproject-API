var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
//routes :
var users = require('./routes/users');
var Categories = require('./routes/Categories');
var Comments = require('./routes/Comments');
var Displays = require('./routes/Displays');
var Events = require('./routes/Events');
var Includes = require('./routes/Includes');
var Likes = require('./routes/Likes');
var Orders = require('./routes/Orders');
var Pictures_event = require('./routes/Pictures_event');
var Pictures_product = require('./routes/Pictures_product');
var Products = require('./routes/Products');
var Registers = require('./routes/Registers')
var Schools = require('./routes/Schools');
var Statuses_event = require('./routes/Statuses_event');
var Statuses_order = require('./routes/Statuses_order');
var Statuses_user = require('./routes/Statuses_user');
var Votes = require('./routes/Votes');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
app.use('/api/users', users);
app.use('/api/categories', Categories);
app.use('/api/comments', Comments);
app.use('/api/displays', Displays);
app.use('/api/events', Events);
app.use('/api/includes', Includes);
app.use('/api/likes', Likes);
app.use('/api/orders', Orders);
app.use('/api/pictures_event', Pictures_event);
app.use('/api/pictures_product', Pictures_product);
app.use('/api/products', Products);
app.use('/api/registers', Registers);
app.use('/api/schools', Schools);
app.use('/api/statuses_event', Statuses_event);
app.use('/api/statuses_order', Statuses_order);
app.use('/api/statuses_user', Statuses_user);
app.use('/api/votes', Votes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;