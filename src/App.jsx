import logo from "/logo.png";
import "./App.css";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { getPokemonImage, getRandomPokemon } from "./utils";
import { useState } from "react";
import { pokedex } from "./pokedex";
import { UserGuess } from "./component/userguess";
import { ScramblePokeName } from "./component/scramblename";
import { CheckWin } from "./component/checkwin";
import Button from "react-bootstrap/Button";

function App() {
  //generating a random pokemon name from the json file.

  const [currPokemon, setCurrentPokemon] = useState(getRandomPokemon());
  const [guessedPokemon, setGuessedPokemon] = useState([]);
  const [currGuess, setCurrGuess] = useState("-");
  const [score, setScore] = useState(0);
  const [hpLeft, setHpLeft] = useState(6);

  //7. When the round ends, give the user an option to play again or restart the game.
  const handleRestart = () => {
    setCurrentPokemon(getRandomPokemon()); // Reset with new Pokemon
    console.log("New Pokemon:", currPokemon);
    setGuessedPokemon([]); // Clear guesses
    setHpLeft(6); // Reset HP to 6
    setScore(0); // Reset score
  };
  const handleNextGame = () => {
    setCurrentPokemon(getRandomPokemon()); // Get a new random Pokemon
    setGuessedPokemon([]); // Clear guesses
  };

  return (
    <Container>
      <img className="logo" src={logo} />
      <h2>Who's that Pokemon?</h2>

      <Row>
        <Col>
          <div>
            <ScramblePokeName
              currPokemon={currPokemon}
              setCurrentPokemon={setCurrentPokemon}
            />
          </div>
          <div>
            <CheckWin
              currGuess={currGuess}
              setCurrGuess={setCurrGuess}
              currPokemon={currPokemon}
              setCurrentPokemon={setCurrentPokemon}
              score={score}
              setScore={setScore}
              hpLeft={hpLeft}
              setHpLeft={setHpLeft}
            />
          </div>
        </Col>
        <Col>
          <div className="card">
            <p>Your Guesses:</p>
            {guessedPokemon.length > 0 ? guessedPokemon.toString() : "-"}
            <p>
              <UserGuess
                guessedPokemon={guessedPokemon}
                setGuessedPokemon={setGuessedPokemon}
                currGuess={currGuess}
                setCurrGuess={setCurrGuess}
              />
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" onClick={handleRestart}>
            Restart
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            onClick={handleNextGame} // Call NextGame when the button is clicked
          >
            Next Stage
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
