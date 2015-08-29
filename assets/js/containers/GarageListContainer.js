import { connect } from 'react-redux';

import GarageList from './../components/GarageList';
import { searchVehicles } from './../actions/GarageListActionsRedux';

export default connect(
  state => state.GarageList,
  dispatch => ({
    searchVehicles: (searchText) => dispatch(searchVehicles(searchText))
  })
)(GarageList);
