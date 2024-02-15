import { useState } from "react";
import PlayerCard from "./PlayerCard";
import "./PlayersList.css";

export default function PlayersList({ allPlayers, location, absentPlayers, setAbsentPlayers }) {
  const [attendanceList, setAttendanceList] = useState([]);
  

  const updateAttendance = (newPlayer) => {
    const foundPlayer = attendanceList.find(
      (player) => player.id === newPlayer.id
    );

    if (!foundPlayer) {
      //adding player to attendanceList
      setAttendanceList([...attendanceList, newPlayer]);

      //filtering out player from absentPlayers
      const filteredAbsentList = absentPlayers.filter(
        (player) => player.id !== newPlayer.id
      );
      setAbsentPlayers(filteredAbsentList);
    } else {
      //filtering out player from attendanceList
      const filteredAttendanceList = attendanceList.filter(
        (player) => player.id !== newPlayer.id
      );
      setAttendanceList(filteredAttendanceList);

      //adding player to absentPlayers
      setAbsentPlayers([...absentPlayers, newPlayer]);
    }
  };

  return (
    <div className="players-list">
      <h2>
        List of players that train at{" "}
        <span className="players-list-location">{location}</span>
      </h2>
      <ul>
        {allPlayers.map((player) => {
          return (
            <PlayerCard
              key={player.id}
              player={player}
              updateAttendance={updateAttendance}
            />
          );
        })}
      </ul>
      <div>Total Attendance: {attendanceList.length}</div>
      {absentPlayers.length > 0 && (
        <>
          <h4>Absent Players:</h4>
          <ul>
            {absentPlayers.map((player) => {
              return <li key={player.id}>{player.firstName}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}
