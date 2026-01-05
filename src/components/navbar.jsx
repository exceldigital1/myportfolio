import React, { useState } from "react";

function Navbar({ theme = "light", onToggleTheme = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">Dam <span>Dev</span></div>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li className="theme-item">
          <button
            aria-label="Toggle theme"
            className="theme-toggle"
            onClick={(e) => {
              console.log('theme toggle clicked');
              onToggleTheme(e);
            }}
            title="Toggle dark / light"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
