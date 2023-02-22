import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../components/blog/Blog";
import DinamicPages from "../components/dinamicPages/DinamicPages";
import Home from "../components/home/Home";
import NavigationBar from "../components/navbar/NavigationBar";
import Pricing from "../components/pricing/Pricing";
import Products from "../components/products/Products";

const AppRouter = () => {
  const URL_BASE = "/ejercicio-hook-react-router";
  const pages = ["Products", "Pricing", "Blog"];
  const componentsPages = [
    { path: "Products", component: <Products /> },
    { path: "Pricing", component: <Pricing /> },
    { path: "Blog", component: <Blog /> },
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={URL_BASE}
          element={<NavigationBar pages={pages} settings={settings} />}
        >
          <Route index element={<Home />} />
          {/* {componentsPages.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))} */}
          <Route path=":namePage" element={<DinamicPages pages={pages} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
