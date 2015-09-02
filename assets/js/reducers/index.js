import GarageListReducer from './GarageListReducer';

export default function (state = {}, action) {
  return {
    GarageList: GarageListReducer(state.GarageList, action)
  };
}
