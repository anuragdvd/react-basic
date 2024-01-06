import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./LandingPage";
import GamePage from "./GamePage";
import { useState } from "react";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const togglePage = () => {
    setIsGameStarted(!isGameStarted);
  };

  return (
    <div>
      {isGameStarted ? <GamePage /> : <LandingPage togglePage={togglePage} />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
