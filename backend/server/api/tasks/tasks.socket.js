/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Items = require('./items.model');

exports.register = function(socket) {
  Items.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Items.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('items:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('items:remove', doc);
}