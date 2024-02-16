import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PlayersList from "./components/PlayersList";
import NewPlayerForm from "./components/NewPlayerForm";
import "./App.css";

function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [absentPlayers, setAbsentPlayers] = useState([]);

  const URL = import.meta.env.VITE_BASE_API_URL;

  const addNewPlayer = (newPlayer) => {
    setAllPlayers([...allPlayers, newPlayer]);
    setAbsentPlayers([...absentPlayers, newPlayer]);
  };

  const practiceLocation = "Track field";

  useEffect(() => {
    //fetching the players
    fetch(`${URL}/players`)
      .then((res) => res.json())
      .then((data) => {
        setAllPlayers(data);
        setAbsentPlayers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <PlayersList
        allPlayers={allPlayers}
        location={practiceLocation}
        absentPlayers={absentPlayers}
        setAbsentPlayers={setAbsentPlayers}
        setAllPlayers={setAllPlayers}
      />
      <NewPlayerForm addNewPlayer={addNewPlayer} />
    </div>
  );
}

export default App;
