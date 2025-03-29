import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Reactivate</h1>
      <p className="home-text">
        Sharpen your React skills with interactive coding challenges, mock interviews and EchoHire an AI mirrors professional interview responses with precision and clarity.
      </p>
      <div className="home-buttons">
        <a href="/mock-interview" className="home-button">Mock Interviews</a>
        <a href="/coding-challenges" className="home-button secondary">Coding Challenges</a>
        <a href="/chat-bot" className="home-button third">EchoHire</a>
      </div>
    </div>
  );
}

export default Home;
