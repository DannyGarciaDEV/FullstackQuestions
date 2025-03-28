import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import MockInterview from "./MockInterview";
import CodingChallenges from "./CodingChallenges";
import Home from "./Home";
import Navbar from "./Navbar"; // Import Navbar component
import ChatBot from "./ChatBot";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Use the Navbar Component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/coding-challenges" element={<CodingChallenges />} />
          <Route path="/chat-bot" element={<ChatBot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
