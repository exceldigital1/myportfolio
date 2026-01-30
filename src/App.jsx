import { useEffect, useState } from "react";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  // debug log for toggle
  useEffect(() => {
    console.log("theme set to", theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
