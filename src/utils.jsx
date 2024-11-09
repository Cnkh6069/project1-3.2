import { pokedex } from "./pokedex";

const randomIndex = Math.floor(Math.random() * pokedex.length);

export const getRandomPokemon = () => {
  const randomPokedex = pokedex[randomIndex].pokeName.toLowerCase();
  //Lowercase words for simplicity
  return pokedex[randomIndex].pokeName.toLowerCase();
};

export const getPokemonImage = () => {
  return <img src={pokedex[randomIndex].pokeImage} />;
};
