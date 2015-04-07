var Backbone = require('backbone');
var $        = require('jquery');
var Vehicle  = require('../models/Vehicle');

Backbone.$ = $;

var Vehicles = Backbone.Collection.extend({
  model: Vehicle,
  url: 'http://api.autio.local/v1/vehicles' // TODO: Move base url to external const somewhere
});

module.exports = Vehicles;
