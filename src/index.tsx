import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import addCarRducer from './store/reducers/add-car';
import appRducer from './store/reducers/app';
import './index.css';
import App from './containers/app';

const rootElement = document.getElementById('root');
const rootReducer = combineReducers({
  addCarRducer: addCarRducer,
  appRducer: appRducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
