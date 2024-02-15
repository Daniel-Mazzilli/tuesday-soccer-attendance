import { useState } from "react";
import "./PlayerCard.css";

export default function PlayerCard({ player, updateAttendanceList, updateAbsentPlayers }) {
  const [isPresent, setIsPresent] = useState(false);

  const toggleAttendance = () => {
    setIsPresent(!isPresent);
    updateAttendanceList(player);
    updateAbsentPlayers(player);
  }

  return (
    <li className="player-card">
      <div>{`${player.lastName}, ${player.firstName} // Role: ${player.role}`}</div>
      <button className="player-card-button" onClick={toggleAttendance}>{isPresent ? "present" : "absent"}</button>
    </li>
  );
}
