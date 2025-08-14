import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <section className='home-header'>
        <div className='container'> 
          <div className='home-header-text'>
            <h1>Welcome to MathBuddy 👋</h1>
            <p className="tagline">A friendly space to explore numbers with fun visuals and games!</p>
            <Link to="/learn" className="home-btn">Start Learning ➕➖</Link>
          </div>
          <div className='home-header-image'>
            <img src="/header_image_1.jpg" alt="" />
          </div>
        </div>
      </section>


      {/* Play Games Section */}
      <section className='play-games'>
        <div className='container'> 
          <div className='home-header-image'>
            <img src="/header_image_2.jpg" alt="Math games illustration" />
          </div>
          <div className='home-header-text'>
            <h1>Play Fun Math Games 🎲</h1>
            <p className="tagline">Sharpen your skills with exciting and interactive math challenges.</p>
            <Link to="/play" className="home-btn">Play Games 🎲</Link>
          </div>
        </div>
      </section>

      {/* Take a Quiz Section */}
      <section className='take-quiz'>
        <div className='container'> 
          <div className='home-header-text'>
            <h1>Test Your Knowledge 🧠</h1>
            <p className="tagline">Challenge yourself with quick quizzes and see how much you’ve learned!</p>
            <Link to="/quiz" className="home-btn">Take a Quiz 🧠</Link>
          </div>
          <div className='home-header-image'>
            <img src="/header_image_3.avif" alt="Math quiz illustration" />
          </div>
        </div>
      </section>
    </>
  );
}
