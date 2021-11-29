// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import flatsReducer from './reducers/flats_reducer.js';
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  flats: flatsReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);