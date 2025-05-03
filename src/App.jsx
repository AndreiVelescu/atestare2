import { useEffect, useState } from "react";
import { ButtonLetters } from "./components/ButtonLetters";
import { GameImage } from "./components/GameImage";
import { GuessDisplay } from "./components/GuessDisplay";
import words from "./constants/words";
import stages from "./constants/stages";
import letters from "./constants/letters";

function App() {
  const [word, setWord] = useState("");

  const [selected, setSelected] = useState([]);
  const [used, setUsed] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    const randWord = words[Math.floor(Math.random() * words.length)];
    setWord(randWord);

    setSelected(Array(randWord.length).fill(""));
    setUsed([]);
    setImageIndex(0);
    setMessage("");
    setGameOver(false);
  };
  console.log(word);

  const handleSelect = (letter, index) => {
    if (used.includes(index) || gameOver) return;

    setUsed((prev) => [...prev, index]);

    if (word.includes(letter)) {
      const newSelected = [...selected];
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          newSelected[i] = letter;
        }
      }
      setSelected(newSelected);

      if (newSelected.join("") === word) {
        setMessage("Felicitari! Ai ghicit!");
        setGameOver(true);
      }
    } else {
      const nextImageIndex = imageIndex + 1;
      if (nextImageIndex >= stages.length) {
        setImageIndex(stages.length - 1);
        setMessage(`Ai pierdut! Cuvântul era: ${word}`);
        setGameOver(true);
      } else {
        setImageIndex(nextImageIndex);
      }
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        Hangman
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GameImage image={stages[imageIndex]} />
      </div>

      <GuessDisplay selected={selected} />

      <ButtonLetters
        letters={letters}
        onSelect={handleSelect}
        used={used}
        disabled={gameOver}
      />
      {gameOver ? (
        <h1
          style={{
            color: gameOver && message.includes("pierdut") ? "red" : "green",
          }}
        >
          {message}
        </h1>
      ) : null}

      <button
        onClick={startGame}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Restart
      </button>
    </div>
  );
}

export default App;
