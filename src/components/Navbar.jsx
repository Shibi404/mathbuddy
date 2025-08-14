import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MathBuddy</div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/learn" onClick={() => setIsOpen(false)}>Learn</Link>
        <Link to="/play" onClick={() => setIsOpen(false)}>Play</Link>
        <Link to="/quiz" onClick={() => setIsOpen(false)}>Quiz</Link>
      </div>
    </nav>
  );
}
