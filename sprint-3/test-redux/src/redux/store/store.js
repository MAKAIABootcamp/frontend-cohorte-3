import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../reducers/productReducer";

const reducer = {
    //agregar los reducers
    productReducer
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;