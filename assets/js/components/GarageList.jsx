var React = require('React');

(function (React, module, undefined) {
  var Vehicle = require('./Vehicle.jsx');

  module.exports = React.createClass({
    render: function () {
      return (
        <ul>
          {
            this.props.vehicles.map(function (vehicle) {
              return <Vehicle data={vehicle} />
            })
          }
        </ul>
      );
    }
  });
}(React, module));