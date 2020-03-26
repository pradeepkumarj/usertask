/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Cart = require('../api/cart/cart.model');
var Orders = require('../api/orders/orders.model');
var Details = require('../api/details/details.model');
var Items = require('../api/items/items.model');
var Catogery = require('../api/catogery/catogery.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

// Insert seed data below
var cartSeed = require('../api/cart/cart.seed.json');
var ordersSeed = require('../api/orders/orders.seed.json');
var detailsSeed = require('../api/details/details.seed.json');
var itemsSeed = require('../api/items/items.seed.json');
var catogerySeed = require('../api/catogery/catogery.seed.json');
var thingSeed = require('../api/thing/thing.seed.json');

// Insert seed inserts below
Cart.find({}).remove(function() {
	Cart.create(cartSeed);
});

Orders.find({}).remove(function() {
	Orders.create(ordersSeed);
});

Details.find({}).remove(function() {
	Details.create(detailsSeed);
});

Items.find({}).remove(function() {
	Items.create(itemsSeed);
});

Catogery.find({}).remove(function() {
	Catogery.create(catogerySeed);
});

Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});