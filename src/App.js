import React from "react";
import GameList from "./components/GameList";
import Navbar from "./components/Navbar";
import "./styles/main.css";
function App() {
    return (
        <div className="App">
            <Navbar />

            <GameList />
        </div>
    );
}

export default App;
