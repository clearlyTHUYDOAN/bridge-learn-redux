// Questions:
// 1) Is createStore usually/always located wherever you have the ReactDOM.render? 
// 2) Is the reducer in createStore all the reducers? Combined from the combineReducers?
// 3

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import reducer from './reducers';

// createStore creates a Redux store that holds the complete state tree of your app.
// There should only be a single store in your app.

const store = createStore(reducer, 
  applyMiddleware(thunk), // this is how thunk is integrated into the redux library
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // what's this?

// The store is made by the function createStore (imported from Redux). It's passed the "reducer". 
// A function combines all the reducers and that is passed into createStore. 

// Provider makes the Redux store available to the connect() calls in the component hierarchy below. 
// Normally, you can’t use connect() without wrapping the root component in <Provider>.
// If using react-router, put Provider on the outermost level, outside the router. 

// Redux allows for middleware. Middleware describes special functions that occur at specific times during the regular process
// of how Redux works. If you want to intercept these things in the middle, you use middleware. 

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root') // root is defined in index.html
);

// Redux Flow:
// - Consider organizing with these folders: actions, components, constants, reducers. 
// - Then App and Index in top src folder. 
// 1) Set up main component, action(s) and reducer(s). 
// - Don't forget connect, mapStateToProps and mapDispatchToProps in the main app component. 
// 2) Combine reducers in a separate file. 
// 3) Create your store in your index.js file. Here we also ReactDOM.render, pass combined reducers to store,
// and then pass the store to our components with Provider.
// 4) Create constants as you go.
// 5) Test. 