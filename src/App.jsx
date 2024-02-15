import { useState } from "react";
import Navbar from "./components/Navbar";
import PlayersList from "./components/PlayersList";
import NewPlayerForm from "./components/NewPlayerForm";
import "./App.css";

function App() {
  const players = [
    {
      firstName: "Dan",
      lastName: "Mazzilli",
      role: "Assistant Coach",
      joined: "December 2019",
      id: 1,
    },
    {
      firstName: "Jazon",
      lastName: "Younge",
      role: "player",
      joined: "May 2023",
      id: 2,
    },
    {
      firstName: "Luis",
      lastName: "Tejada",
      role: "player",
      joined: "December 2020",
      id: 3,
    },
  ];

  const [allPlayers, setAllPlayers] = useState(players)
  const [absentPlayers, setAbsentPlayers] = useState(allPlayers);

  const addNewPlayer = (newPlayer) => {
    setAllPlayers([...allPlayers, newPlayer])
    setAbsentPlayers([...absentPlayers, newPlayer])
  }

  const practiceLocation = "Track field"

  return (
    <div className="app">
      <Navbar />
      <PlayersList allPlayers={allPlayers} location={practiceLocation} absentPlayers={absentPlayers} setAbsentPlayers={setAbsentPlayers}/>
      <NewPlayerForm addNewPlayer={addNewPlayer}/>
    </div>
  );
}

export default App;
