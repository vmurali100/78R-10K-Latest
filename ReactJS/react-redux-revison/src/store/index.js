import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./redcuers/productsReducer";
import { usersReducer } from "./redcuers/usersReducer";
import thunk from "redux-thunk";

export const mainStore = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
  middleware: [thunk],
});
