import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
// How to Create a store
// Super Market
// To Create a Store .. A business Logic has to be created - This Business logic Function is called Reducer !!!
const defaultState = {
  users: ["Murali", "Krishna", "Ram", "Ravi"],
  employees: [],
  products: [],
  books: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADDUSER":
      let newUsers = [...state.users]
      newUsers.push(action.paload)
      return {...state,users:newUsers}
    case "DELETEUSER":
      let updatedUsers = state.users.filter((user)=>user !== action.paload);
      return {...state,users:updatedUsers}

    default:
      return state;
  }
  // Create a User
  // Read a User
  // update a User
  // delete a User
};

const store = createStore(reducer);
console.log(store);
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
