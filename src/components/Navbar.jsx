import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MathBuddy</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/play">Play</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
}
