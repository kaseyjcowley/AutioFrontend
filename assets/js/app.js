import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import GarageListContainer from './containers/GarageListContainer';
import rootReducer from './reducers';
import initialState from './data/GarageList';

let store = createStore(rootReducer, initialState);

React.render(
  <Provider store={store}>
    {() => <GarageListContainer />}
  </Provider>,
  document.body
);
