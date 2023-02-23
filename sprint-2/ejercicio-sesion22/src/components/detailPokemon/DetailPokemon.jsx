import React from "react";
import { useParams } from "react-router-dom";

const DetailPokemon = ({ data }) => {
  const { namePokemon } = useParams();
  const pokemon = data.length
    ? data.find((poke) => poke.name === namePokemon)
    : null;

    return (
      <div>
        {pokemon && (
          <>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>{pokemon.name}</span>
          </>
        )}
      </div>
    );
};

export default DetailPokemon;
