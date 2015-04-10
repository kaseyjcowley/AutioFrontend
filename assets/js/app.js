var Backbone       = require("backbone");
var VehiclesRouter = require("./routers/VehiclesRouter");

// All routes go here. Each new router will register a number of paths
// that will match specific handler functions.
new VehiclesRouter();

Backbone.history.start();
