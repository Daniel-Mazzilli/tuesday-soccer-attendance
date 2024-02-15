import { useState } from "react"
import PlayerCard from "./PlayerCard"
import "./PlayersList.css"

export default function PlayersList ({players, location}) {
    const [attendanceList, setAttendanceList] = useState([])
    const [absentPlayers, setAbsentPlayers] = useState(players)

    const updateAttendanceList = (newPlayer) => {
        const foundPlayer = attendanceList.find(player => player.id === newPlayer.id)

        if(!foundPlayer){
            setAttendanceList([...attendanceList, newPlayer])
            
            const filteredAbsentList = absentPlayers.filter(player => player.id !== newPlayer.id)
            setAbsentPlayers(filteredAbsentList)
        } else {
            const filteredAttendanceList = attendanceList.filter(player => player.id !== newPlayer.id)
            setAttendanceList(filteredAttendanceList)

            setAbsentPlayers([...absentPlayers, newPlayer])
        }
    }

    const updateAbsentPlayers = (newPlayer) => {
        //checking absent player
        // const foundPlayer = absentPlayers.find(player => player.id === newPlayer.id)

        //OR checking the attendanceList
        const foundPlayer = attendanceList.find(player => player.id === newPlayer.id)

        // if(!foundPlayer){
        if(foundPlayer){
            setAbsentPlayers([...absentPlayers, newPlayer])
        } else {
            const filteredAbsentList = absentPlayers.filter(player => player.id !== newPlayer.id)
            setAbsentPlayers(filteredAbsentList)
        }
    }
    
    return (
        <div className="players-list">
            <h2>List of players that train at <span className="players-list-location">{location}</span></h2>
            <ul>
                {players.map(player => {
                    return <PlayerCard key={player.id} player={player} updateAttendanceList={updateAttendanceList} updateAbsentPlayers={updateAbsentPlayers}/>
                })}
            </ul>
            <div>Total Attendance: {attendanceList.length}</div>
            <h4>Absent Players:</h4>
            <ul>
                {absentPlayers.map(player => {return <li key={player.id}>{player.firstName}</li>})}
            </ul>
        </div>
    )
}