import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { webApp } from "./store/store";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(webApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
