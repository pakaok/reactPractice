import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  const [playerState,setPlayerState]=useState("X")
  function handlePlayer(){
    setPlayerState((prevPlayer)=>{return prevPlayer=="X"?"O":"X"})
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="x" isActive={playerState==="X"}/>
          <Player name="Player2" symbol="o" isActive={playerState==="O"}/>
        </ol>
        <GameBoard onSelect={handlePlayer} playerSymbol={playerState}/>
      </div>
    </main>
  );
}

export default App;
