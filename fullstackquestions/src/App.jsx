import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import MockInterview from './MockInterview';
import CodingChallenges from './CodingChallenges';
import Home from './Home'; 

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mock-interview">Mock Interview</Link></li>
            <li><Link to="/coding-challenges">Coding Challenges</Link></li>
          </ul>
        </nav>

        {/* Routing setup using Routes instead of Switch */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/coding-challenges" element={<CodingChallenges />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
