import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import reducer from './reducers';

const store = createStore(reducer,
  applyMiddleware(thunk), // this is how thunk is integrated into the redux library
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// The store is made by the function createStore (imported from Redux). It's passed the reducer. T
// Then a function combines all the reducers, which is passed into createStore. 

// Redux allows for middleware. Middleware describes special functions that occur at specific times during the regular process
// of how Redux works. If you want to intercept these things in the middle, you use middleware. 

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Provider mkes the Redux store available to the connect() calls in the component hierarchy below. 
// Normally, you can’t use connect() without wrapping the root component in <Provider>.
