import { useState } from "react";
import "./PlayerCard.css";

export default function PlayerCard({
  player,
  updateAttendance,
  handleDeletePlayer,
}) {
  const [isPresent, setIsPresent] = useState(false);

  const URL = import.meta.env.VITE_BASE_API_URL;

  const toggleAttendance = () => {
    setIsPresent(!isPresent);
    updateAttendance(player);
  };

  const deletePlayer = () => {
    const options = { method: "DELETE" };
    fetch(`${URL}/players/${player.id}`, options)

    handleDeletePlayer(player)
  };

  return (
    <li className="player-card">
      <div className="player-card-info" onClick={toggleAttendance}>
        <div className="player-card-details">{`${player.lastName}, ${player.firstName} // Role: ${player.role}`}</div>
        <div
          className={`player-attendance ${
            isPresent ? "player-present" : "player-absent"
          }`}
        >
          {isPresent ? "present" : "absent"}
        </div>
      </div>
      <button className="player-remove-button" onClick={deletePlayer}>
        X
      </button>
    </li>
  );
}
