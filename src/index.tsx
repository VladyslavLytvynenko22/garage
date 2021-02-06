import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import addCarRducer from './store/reducers/add-car';
import appRducer from './store/reducers/app';
import './index.css';
import App from './containers/app';

const rootElement = document.getElementById('root');
const rootReducer = combineReducers({
  addCarRducer: addCarRducer,
  appRducer: appRducer,
});
const logger = (store: any) => {
  return (nextArg: any) => {
    return (action: any) => {
      console.log('[Middleware] Dispatching', action);
      const result = nextArg(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    };
  };
};
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
