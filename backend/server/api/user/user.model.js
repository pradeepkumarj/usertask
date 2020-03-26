'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var authTypes = ['github', 'twitter', 'facebook', 'google'];

var users = new Schema({
  userName:String,
  password:String,
  role: { type: String,default: 'Guest'},
});


module.exports = mongoose.model('users', users);
