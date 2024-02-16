import { useState } from "react";
import "./NewPlayerForm.css";

export default function NewPlayerForm({ addNewPlayer }) {
  const [newPlayerInfo, setNewPlayerInfo] = useState({
    firstName: "",
    lastName: "",
    role: "",
    joined: "",
  });

  const URL = import.meta.env.VITE_BASE_API_URL;

  const handleInputChange = (event) => {
    setNewPlayerInfo({
      ...newPlayerInfo,
      [event.target.id]: event.target.value,
    });
  };

  const resetNewPlayerInfo = () => {
    setNewPlayerInfo({
      firstName: "",
      lastName: "",
      role: "",
      joined: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(newPlayerInfo),
      headers: { "Content-Type": "application/json" },
    };

    fetch(`${URL}/players`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("data from POST", data)
        console.log("new player info", newPlayerInfo)
        addNewPlayer(data)});
        
    resetNewPlayerInfo();
  };

  return (
    <form className="new-player-form" onSubmit={handleSubmit}>
      <div className="new-player-form-title">Add New Player</div>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        placeholder="type your first name"
        type="text"
        value={newPlayerInfo.firstName}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        placeholder="type your last name"
        type="text"
        value={newPlayerInfo.lastName}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        placeholder="add your role"
        type="text"
        value={newPlayerInfo.role}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="joined">Joined:</label>
      <input
        id="joined"
        placeholder="type your joined date"
        type="date"
        value={newPlayerInfo.joined}
        onChange={handleInputChange}
        required
      />
      <input className="form-submit" type="submit" />
    </form>
  );
}
