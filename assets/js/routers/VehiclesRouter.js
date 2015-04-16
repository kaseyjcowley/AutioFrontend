var Backbone          = require("backbone");
var React             = require("react");
var $                 = require("jquery");
var GarageList        = require("../components/GarageList");
var SingleVehicle     = require("../components/SingleVehicle");

Backbone.$ = $;

var VehiclesRouter = Backbone.Router.extend({

  collection: null,
  collectionIsLoaded: false,

  routes: {
    "vehicles": "vehicles",   // #vehicles
    "vehicles/:id": "vehicle" // #vehicles/1
  },

  initialize: function (collection) {
    this.collection = collection;
  },

  execute: function (callback, params) {
    if (this.collectionIsLoaded)
      return callback.apply(this, params);

    this.collection.fetch({
      success: function () {
        this.collectionIsLoaded = true;

        callback.apply(this, params);
      }.bind(this),

      error: function () {
        alert("Whoops! Something went wrong...");
        this.navigate("/");
      }
    });
  },

  vehicles: function () {
    React.render(React.createElement(GarageList, { vehicleModels: this.collection.models }), document.body);
  },

  vehicle: function (id) {
    var vehicle = this.collection.get(id);

    React.render(React.createElement(SingleVehicle, { vehicleModel: vehicle }), document.body);
  }

});

module.exports = VehiclesRouter;
