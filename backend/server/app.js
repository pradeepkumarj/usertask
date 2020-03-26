/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');
// mongoose.connect('mongodb://mongodb+srv://UserName:<password>@cluster0-8vkls.mongodb.net/test?retryWrites=true&w=majority', {
 
// });
// Connect to database
mongoose.set('useCreateIndex', true);
mongoose.connect(config.mongo.uri,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connection.on('error', function(err) {
	console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});
mongoose.connection.on('open', function openCallback() {
  console.log('Data_Base Connected Successfully');
})
// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
