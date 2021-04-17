import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchPokemon from "./fetchPokemon";

const Pokemon = ({ id }) => {
  const { data: pokemon, error } = useQuery(["pokemon", { id }], fetchPokemon);

  return !pokemon ? (
    <div>{error}</div>
  ) : (
    <div>
      <h2>#{id}</h2>
      <h2>{pokemon.name}</h2>
      <img alt="pokemon" src={pokemon.sprites.front_shiny} />
    </div>
  );
};

export const PokemonPager = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <button type="button" onClick={() => setId(id !== 1 ? id - 1 : id)}>
        Previous
      </button>
      <button type="button" onClick={() => setId(id !== 250 ? id + 1 : id)}>
        Next
      </button>
      <Pokemon id={id} />
    </div>
  );
};
