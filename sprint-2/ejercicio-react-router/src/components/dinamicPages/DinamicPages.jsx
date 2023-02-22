import React from "react";
import { useParams } from "react-router-dom";
import { asientosVuelos } from "../../services/asientos";

const DinamicPages = ({ pages }) => {
  const { namePage } = useParams();
  //const infoPage = pages.find(page => page === namePage);
  return (
    <>
      <div>{namePage}</div>
      <div>
        {asientosVuelos.map((asiento) => (
          <button key={asiento.id}>{asiento.code}</button>
        ))}
      </div>
    </>
  );
};

export default DinamicPages;
