import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./store/Reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
// How to Create a store
// Super Market
// To Create a Store .. A business Logic has to be created - This Business logic Function is called Reducer !!!
const store = createStore(reducer);
// store.dispatch(addUserAction())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
