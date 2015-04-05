var React      = require('React');
var GarageList = require('./components/GarageList.jsx');
var data       = require('./mock.json');

React.render(React.createElement(GarageList, data), document.getElementsByClassName('garage-list')[0]);