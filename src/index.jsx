// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// createStore allow to set the initial values of reduxState
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { logger } from 'redux-logger'; 
// use reduxPromise middleware so we can make api calls with fetch
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import flatsReducer from './reducers/flats_reducer.js';
import selectFlatReducer from './reducers/select_flat_reducer.js';
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectFlatReducer
});
// logger show the previous state, the action being called and the new state
const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);