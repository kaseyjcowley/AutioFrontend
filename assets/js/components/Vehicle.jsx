var React = require('React');

(function (React, module, undefined) {
  module.exports = React.createClass({
    render: function () {
      return (
        <li>{this.props.data}</li>
      );
    }
  });
}(React, module));