import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducers/counterReducers";

const reducer = {
  //Aquí van todos los reducer de la aplicación
  counterReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
