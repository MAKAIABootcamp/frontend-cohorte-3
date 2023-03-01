import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Home from "./components/home/Home";
import store from "./redux/store/store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);
