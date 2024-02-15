import { useState } from "react";
import "./PlayerCard.css";

export default function PlayerCard({ player }) {
  const [isPresent, setIsPresent] = useState(false);

  const toggleAttendance = () => {
    setIsPresent(!isPresent)
  }

  return (
    <li className="player-card" key={player.id}>
      <div>{`${player.lastName}, ${player.firstName} // Role: ${player.role}`}</div>
      <button className="player-card-button" onClick={toggleAttendance}>{isPresent ? "present" : "absent"}</button>
    </li>
  );
}
