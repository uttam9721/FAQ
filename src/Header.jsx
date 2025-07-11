import React, { useState } from 'react';
// import './Header.css'; // Optional if separated
import './App.css'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">Modexa</h1>

        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>

        <nav className={`nav ${sidebarOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
