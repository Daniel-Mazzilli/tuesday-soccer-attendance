import { useState } from "react";
import "./PlayerCard.css";

export default function PlayerCard({ player, updateAttendance }) {
  const [isPresent, setIsPresent] = useState(false);

  const toggleAttendance = () => {
    setIsPresent(!isPresent);
    updateAttendance(player);
  }

  return (
    <li className="player-card" onClick={toggleAttendance}>
      <div>{`${player.lastName}, ${player.firstName} // Role: ${player.role}`}</div>
      <div className={`player-attendance ${isPresent ? "player-present" : "player-absent"}`} >{isPresent ? "present" : "absent"}</div>
    </li>
  );
}
