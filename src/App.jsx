import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [isDardMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  return (
    <main className={isDardMode ? "dark-mode" : ""}>
      <Home isDardMode={isDardMode} setIsDarkMode={setIsDarkMode} />
    </main>
  );
}

export default App;
