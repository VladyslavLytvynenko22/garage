import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import addCarRducer from './store/reducers/add-car';
import appRducer from './store/reducers/app';
import './index.css';
import App from './containers/App';

const rootElement = document.getElementById('root');
const rootReducer = combineReducers({
  addCarRducer: addCarRducer,
  appRducer: appRducer,
});
const logger = (store) => {
  return (nextArg) => {
    return (action) => {
      console.log('[Middleware] Dispatching', action);
      const result = nextArg(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
