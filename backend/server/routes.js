/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/itemss', require('./api/tasks'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/tasks', require('./api/tasks'));
  app.use('/auth', require('./auth'));
};
