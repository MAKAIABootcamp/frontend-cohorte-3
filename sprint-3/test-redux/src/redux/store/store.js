import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../reducers/productReducer";
import { userReducer } from "../reducers/userReducer";

const reducer = {
  //agregar los reducers
  productReducer,
  userReducer,
};

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;