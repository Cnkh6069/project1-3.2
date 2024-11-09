import { useEffect, useState } from "react";

import { getPokemonImage, getRandomPokemon } from "../utils";

//compare currGuess against currPokemon to check win condition
export const CheckWin = ({
  currGuess,
  setCurrGuess,
  currPokemon,
  setCurrentPokemon,
  score,
  setScore,
  hpLeft,
  setHpLeft,
}) => {
  const [isWin, setIsWin] = useState(false);

  //To check if the guess is correct
  const checkMatch = () => {
    if (currGuess === currPokemon) {
      setIsWin(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsWin(false);
      setHpLeft(hpLeft - 1);
    }
  };
  useEffect(() => {
    checkMatch(); // Run checkMatch on every change of currGuess or currPokemon
  }, [currGuess, currPokemon]); // Dependencies: only re-run when currGuess or currPokemon changes

  return (
    <div>
      {isWin ? (
        <div>
          {getPokemonImage()}
          <p />
          {currPokemon}
          <p>You are correct! Your current EXP is {score}. </p>
          <p>{hpLeft} HP left!</p>
        </div>
      ) : (
        <div>Who's that Pokemon?</div>
      )}
    </div>
  );
};
