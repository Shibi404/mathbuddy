import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Learn from './pages/Learn'
import Play from './pages/Play'
import Quiz from './pages/Quiz'
import Video from './pages/Video'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/play" element={<Play />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
