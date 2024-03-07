import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  let buttonName = "Edit";
  let editPlayer = <span className="player-name">{playerName}</span>;

  function editChange() {
    setIsEditing((isEditing) => !isEditing);
    if(isEditing){
      onChangeName(symbol,playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  
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
