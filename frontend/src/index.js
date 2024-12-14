import React from 'react';
import * as serviceWorker from './serviceWorker';
// import '../index.css';
import './style.css'
import './admin.css'
// import './main.scss'

import './jqueryindex';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './components/App';
import Cookie from 'js-cookie';

// const cartItems =  sessionStorage.getItem("cartItems") || [];
// const initialState = {
//   cart:{cartItems}
// };
const initialState = {
  carts: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  }
}
console.log({ initialState }, 'cartitem cookies save data');
// console.log(initialState,'cookies data save');
// import userRouter from './components/userRouter'
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(RootReducer, initialState, composeEnhancers(applyMiddleware(thunk, logger)));
// console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);
serviceWorker.unregister();



