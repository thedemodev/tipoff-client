import React from "react";
import GameList from "./components/GameList";
import Navbar from "./components/Navbar";
import TeamBar from "./components/TeamBar";
import "./styles/main.css";
function App() {
    return (
        <div className="App">
            <Navbar />
            <TeamBar />
            <GameList />
        </div>
    );
}

export default App;
