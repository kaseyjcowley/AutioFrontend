var React = require('React');
var GarageList = require('./components/GarageList.jsx');

var data = {
  vehicles: [
    'Dodge',
    'Buick'
  ]
};

React.render(React.createElement(GarageList, data), document.body);