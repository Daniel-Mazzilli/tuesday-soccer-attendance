import { useState } from "react"
import PlayerCard from "./PlayerCard"
import "./PlayersList.css"

export default function PlayersList ({players, location}) {
    const [attendanceList, setAttendanceList] = useState([])
    
    return (
        <div className="players-list">
            <h2>List of players that train at <span className="players-list-location">{location}</span></h2>
            <ul>
                {players.map(player => {
                    return <PlayerCard player={player}/>
                })}
            </ul>
        </div>
    )
}