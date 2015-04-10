var Backbone          = require("backbone");
var React             = require("react");
var $                 = require("jquery");
var _                 = require("lodash");
var VehicleCollection = require("../collections/VehicleCollection");
var GarageList        = require("../components/GarageList");
var SingleVehicle     = require("../components/SingleVehicle");

Backbone.$ = $;

var VehiclesRouter = Backbone.Router.extend({

  collection: null,

  routes: {
    "vehicles": "vehicles",   // #vehicles
    "vehicles/:id": "vehicle" // #vehicles/1
  },

  execute: function (callback, params) {
    // If we have data, just go ahead and call the callback method
    if (this.collection !== null)
      return callback.apply(this, params);

    // Create a new vehicle collection and fetch the data
    // TODO: Potentially decouple this relationship and pass in the vehicle collection as a param
    this.collection = new VehicleCollection();

    this.collection.fetch({
      success: function () {
        callback.apply(this, params);
      }.bind(this)
    });
  },

  vehicles: function () {
    // TODO: Passing in model.attributes...or the actual Backbone model instance?
    var data = _.map(this.collection.models, function (model) {
      return model.attributes;
    });

    // TODO: Better to fetch vehicles...then render component -OR- on component mount, fetch data, set state
    React.render(React.createElement(GarageList, { vehicles: data }), document.body);
    // TODO: Implement graceful failure of server-loaded data
    // TODO: Implement localStorage caching
  },

  vehicle: function (id) {
    var vehicle = this.collection.get(id).attributes;

    // Render the single vehicle view
    React.render(React.createElement(SingleVehicle, { vehicle: vehicle }), document.body);
  }

});

module.exports = VehiclesRouter;
