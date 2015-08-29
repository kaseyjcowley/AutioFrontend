import * as _ from 'lodash';

import initialState from './../data/GarageList';

const initialVehicles = initialState.GarageList.vehicles;

function filterVehicles(vehicles, searchText) {
  searchText = searchText.toLowerCase();

  return vehicles.filter(vehicle => {
    const {make, model} = vehicle.links;
    return _.includes(make.name.toLowerCase(), searchText) || _.includes(model.name.toLowerCase(), searchText);
  });
}

export default function (state, action) {

  switch (action.type) {
    case 'SEARCH_VEHICLES':
      return Object.assign({}, state, {
        searchText: action.searchText,
        vehicles: filterVehicles(initialVehicles, action.searchText)
      });

    default:
      return state;
  }

}
