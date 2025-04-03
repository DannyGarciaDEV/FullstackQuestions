import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Reactivate!</Link>

        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

     
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/mock-interview" className="nav-link">Mock Interview</Link></li>
          <li><Link to="/coding-challenges" className="nav-link">Coding Challenges</Link></li>
          <li><Link to="/chat-bot" className="nav-link">EchoHire</Link></li>
        </ul>
      </div>
    </nav>
  );
}
