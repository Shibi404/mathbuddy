import { useState } from 'react'; // React Hook for State Management
import { Link } from 'react-router-dom'; // React Router for navigation
import '../styles/Navbar.css';

export default function Navbar() {
  // useState hook for managing hamburger menu state (Event Management + State)
  const [isOpen, setIsOpen] = useState(false);

  // Event Handler for toggling menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Routing using React Router */}
      <Link to="/" className="logo">MathBuddy</Link>

      {/* Hamburger Icon - Event Management */}
      <div
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu} // onClick event handler
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links - State Management + Routing */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/learn" onClick={() => setIsOpen(false)}>Learn</Link>
        <Link to="/play" onClick={() => setIsOpen(false)}>Play</Link>
        <Link to="/quiz" onClick={() => setIsOpen(false)}>Quiz</Link>
        <Link to="/video" onClick={() => setIsOpen(false)}>Videos</Link>
      </div>
    </nav>
  );
}
