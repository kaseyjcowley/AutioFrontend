import { combineReducers } from 'redux';

import GarageListReducer from './GarageListReducer';

export function rootReducer(state = {}, action) {
  return {
    GarageList: GarageListReducer(state.GarageList, action)
  };
}
