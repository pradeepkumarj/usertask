var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'usrid',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(username, password, done) {
      User.findOne({userName: username}, function(err, user) {
        var pass = crypto.pbkdf2Sync(password, 'salt', 10000, 64,'sha512').toString('base64');
        if (err) return done(err);
        if (!user) { return done(null, false, { message: 'User Does Not Exists' });}
        else if (user.password!=pass) {return done(null, false, { message: 'Wrong Password.' });}
        else return done(null, user);
      });
    }
  ));
};