'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TaskSchema = new Schema({
  taskName: String,
  status: { type: String,default: 'Created'},
  expires_At:{type:Date},
  created_At:{type:Date,default:Date.now()},
  created_by: {type: Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model('Tasks', TaskSchema)
