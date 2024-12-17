import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./component/Login"; // Import the Login component

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Welcome to My App</h1>
        <p>Manage your tasks effectively with React + Vite</p>
      </header>
      <main>
        <Login />
      </main>
      <footer>
        <p>Click on the Vite and React logos to learn more</p>
      </footer>
    </div>
  );
}

export default App;
