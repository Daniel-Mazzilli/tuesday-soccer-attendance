import Navbar from "./components/Navbar";
import PlayersList from "./components/PlayersList";
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

  const practiceLocation = "Field 6"

  return (
    <div className="app">
      <Navbar />
      <PlayersList players={players} location={practiceLocation}/>
    </div>
  );
}

export default App;
