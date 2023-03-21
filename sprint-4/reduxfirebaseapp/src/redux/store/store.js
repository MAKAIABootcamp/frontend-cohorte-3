import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/loginReducer";

const reducer = {
    login: loginReducer
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;