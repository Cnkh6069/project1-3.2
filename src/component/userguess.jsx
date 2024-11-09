import { useState } from "react";
import Button from "react-bootstrap/Button";
//When the user makes a guess, add that guess to the App component's guessedPokemon state.

export const UserGuess = ({
  guessedPokemon,
  setGuessedPokemon,
  currGuess,
  setCurrGuess,
  hpLeft,
  setHpLeft,
}) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setGuessedPokemon([...guessedPokemon, text]);
    setText("");
    setCurrGuess(text);
  };
  return (
    //input field for player to input guesses
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <Button
        disabled={hpLeft === 0}
        onClick={() => {
          handleClick();
        }}
      >
        I Choose You!
      </Button>
    </>
  );
};
