import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../navigationBar/NavigationBar";

const Pokemons = () => {
  const pages = [
    { label: "Home", path: "" },
    { label: "Nuevo Pokemon", path: "/addPokemon" },
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  return (
    <div>
      <NavigationBar pages={pages} settings={settings} />
      <Outlet />
    </div>
  );
};

export default Pokemons;
