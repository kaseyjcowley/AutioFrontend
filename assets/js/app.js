import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

import GarageListContainer from './containers/GarageListContainer';

let store = createStore(rootReducer);

React.render(
  <Provider store={store}>
    {() => <GarageListContainer />}
  </Provider>,
  document.body
);
