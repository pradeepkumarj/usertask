'use strict';

var _ = require('lodash');
var Tasks = require('./tasks.model');
var moment = require('moment')
var cron = require('node-cron');
 
cron.schedule('*/1 * * * *', () => {
  console.log('running a task every two minutes to expire the task');
  Tasks.updateMany({$and:[{status:'Created'},{expires_At:{$lt:new Date(moment().subtract(1,'d').format('ddd, MMM D, YYYY hh:mm:ss A'))}}]},{$set: {status:'Expired'}}).exec(function (err, tasks) {
    if (err) {console.log(err)}
    else console.log('Some Tasks got expired')
  });
});

// Get list of tasks
exports.index = function (req, res) {
  Tasks.find({created_by:req.user._id,status: { $ne: 'Expired' } }).exec(function (err, tasks) {
    if (err) { console.log(err); return handleError(res, err);}
    else res.status(200).json(tasks);
  });
};

// Get list of expired tasks
exports.getExpiredTask = function (req, res) {
  Tasks.find({created_by:req.user._id,status: 'Expired'}).exec(function (err, tasks) {
    if (err) { console.log(err); return handleError(res, err);}
    else res.status(200).json(tasks);
  });
};

// Creates a new tasks in the DB.
exports.create = function (req, res) {
  req.body.expires_At = moment(req.body.expires_At).format('ddd, MMM D, YYYY hh:mm:ss A')
  req.body.created_by = req.user._id;
  Tasks.create(req.body, function (err, tasks) {
    if (err) {console.log(err);return handleError(res, err);}
    return res.status(201).json(tasks);
  });
};

// Updates an existing tasks in the DB.
exports.update = function (req, res) {
  Tasks.findById(req.body._id, function (err, task) {
    task.status = req.body.status;
    task.expires_At = moment(req.body.expires_At).format('ddd, MMM D, YYYY hh:mm:ss A')
      task.save(function (err) {
        if (err) res.status(422).json(err);
        else res.json({ result: "success" });
      });
  });
};

// Deletes a tasks from the DB.
exports.destroy = function (req, res) {
  Tasks.findById(req.params.id, function (err, tasks) {
    if (err) { return handleError(res, err);}
    else if (!tasks) { return res.status(404).send('Not Found');}
    else {
      tasks.remove(function (err) {
      if (err) { return handleError(res, err);}
      return res.status(204).send('No Content');
    });
  }
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
