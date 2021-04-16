import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import App from "./App";

//middleware (store(dispatch, getState) => next(action to bottom) => action)
const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  //next zapobiega zapetleniu sie akcji dispatch
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();

  return result;
};

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
