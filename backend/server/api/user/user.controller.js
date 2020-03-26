'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
const crypto = require('crypto');


var validationError = function (res, err) {
  return res.status(422).json(err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function (req, res) {
  User.find({}, function (err, users) {
    if (err) return res.status(500).send(err);
    res.status(200).json(users);
  });
};

/**
 * Creates a new user and sets the jwt token for signing in succesfully.
 */
exports.create = async function (req, res) {
  User.find({userName: req.body.userName}, async function (err, users) {
    if (err) return res.status(500).send(err);
    else if (users.userName) { res.status(422).json({err: 'user name already exists' })}
   else {
      var newUser = new User(req.body);
      let password = await crypto.pbkdf2Sync(newUser.password, 'salt', 10000, 64, 'sha512').toString('base64');
      newUser.password = password;
      newUser.save(function (err, user) {
        if (err) {
          console.log(err);
          return validationError(res, err);
        }
        else {
          var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60 * 5});
          res.json({token: token,user: user});
        }
      });
    }
  });

};

/**
 * Get my info
 */
exports.me = function (req, res, next) {
  var userId = req.user._id;
  console.log('me')
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function (err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.status(401).send('Unauthorized');
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function (req, res, next) {
  res.redirect('/');
};
