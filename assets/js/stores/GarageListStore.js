let Reflux = require('reflux');

let GarageListActions = require('../actions/GarageListActions');

let GarageListStore = Reflux.createStore({

  init() {
    this.listenTo(GarageListActions.updateSearchText, this.onUpdateSearchText);
  },

  onUpdateSearchText(searchText) {
    this.trigger(searchText);
  }

});

module.exports = GarageListStore;
