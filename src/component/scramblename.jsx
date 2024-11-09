import { useState } from "react";
import { useEffect } from "react";

export const ScramblePokeName = ({ currPokemon, setCurrentPokemon }) => {
  const [scrambledName, setScrambledName] = useState("");

  useEffect(() => {
    const scramble = () => {
      const letters = currPokemon.split("");
      const shuffledLetters = letters.sort(() => 0.5 - Math.random());
      const newScrambledName = shuffledLetters.join("");
      setScrambledName(newScrambledName);
    };
    scramble();
  }, [currPokemon]);
  return <h2>{scrambledName}</h2>;
};
