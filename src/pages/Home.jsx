import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to MathBuddy 👋</h1>
      <p className="tagline">A friendly space to explore numbers with fun visuals and games!</p>

      <div className="home-buttons">
        <Link to="/learn" className="home-btn">Start Learning ➕➖</Link>
        <Link to="/play" className="home-btn">Play Games 🎲</Link>
        <Link to="/quiz" className="home-btn">Take a Quiz 🧠</Link>
      </div>
    </div>
  );
}
