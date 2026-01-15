// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import { loggerMiddleware, blockNegativeMiddleware } from "./Middleware";


const store = configureStore({
  reducer: {
    cart: cartReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware).concat(blockNegativeMiddleware),
});

export default store;
