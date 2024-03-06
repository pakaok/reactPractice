import { useState } from "react";
import { WINNING_COMBINATIONS } from "./Winning_combinations";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  
  function editChange() {
    setIsEditing((isEditing) => !isEditing);
  }
  let buttonName = "Edit";

  function handleChange(event) {
    setPlayerName(event.target.value);
    console.log("changed");
  }

  let editPlayer = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    buttonName = "Save";
    editPlayer = (
      <input type="text" value={playerName} required onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active":undefined}>
      <span className="player" >
        {editPlayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editChange}>{buttonName}</button>
    </li>
  );
}
