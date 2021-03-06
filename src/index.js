import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";

import './index.css';
import App from './components/App';
import rootReducer from "./reducers";


//logger middleware
// const logger = function({dispatch, action}){
//   return function(next){
//     return function(action){
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     }
//   }
// }
//OTHER WAY
const logger = ({dispatch, action}) => (next) => (action) => {
  console.log("ACTION_TYPE = ", action.type);
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store", store);
// console.lg("BEFORE_STATE", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{name: "SuperMan"}]
// });

// console.log("AFTER_STATE", store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

