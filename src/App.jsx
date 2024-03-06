import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/Winning_combinations";

const initialBoard = [
[null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let gameBoard = initialBoard;
  const activePlayer = deriveActivePlayer(gameTurns)
  let winner
  for (const gameTurn of gameTurns) {
    const { square, player } = gameTurn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column]    
    const secondSymbol = gameBoard[combination[1].row][combination[1].column]    
    const thridSymbol = gameBoard[combination[2].row][combination[2].column]    

    if(firstSymbol && firstSymbol == secondSymbol && firstSymbol == thridSymbol){
      winner = firstSymbol
    }
  }
  function handlePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn)
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="x" isActive={activePlayer === "X"} />
          <Player name="Player2" symbol="o" isActive={activePlayer === "O"} />
        </ol>
      {winner && <p>You won, {winner}</p>}

        <GameBoard onSelect={handlePlayer} Board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
