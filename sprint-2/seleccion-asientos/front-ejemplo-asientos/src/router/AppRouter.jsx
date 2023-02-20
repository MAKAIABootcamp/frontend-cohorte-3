import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fligth from "../components/fligth/Fligth";
import Seats from "../components/Seats/Seats";

const AppRouter = () => {
  const URL_BASE = "ejemplo-seleccion-asientos"; //Este es el nombre del repositorio de GitHub
  return (
    <Router>
      <Routes>
        <Route path={`/${URL_BASE}`}>
          <Route index element={<Seats />} />
          <Route path="fligth" element={<Fligth />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
