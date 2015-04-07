var Backbone          = require('backbone');
var React             = require('react');
var $                 = require('jquery');
var VehicleCollection = require('../collections/VehicleCollection');
var GarageList        = require('../components/GarageList.jsx');

Backbone.$ = $;

var VehiclesRouter = Backbone.Router.extend({

  routes: {
    "vehicles": "vehicles" // /#vehicles
  },

  vehicles: function () {
    var vehicles = new VehicleCollection();

    // TODO: Better to fetch vehicles...then render component -OR- on component mount, fetch data, set state
    // Fetch a list of all our vehicles from the server
    vehicles.fetch({
      success: function (collection, data) {
        // Render the GarageList react component with our vehicle data :)
        React.render(React.createElement(GarageList, data), document.body);
      }

      // TODO: Implement graceful failure of server-loaded data
      // TODO: Implement localStorage caching
    });
  }

});

module.exports = VehiclesRouter;
