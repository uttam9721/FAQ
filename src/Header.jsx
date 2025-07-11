import React, { useState } from 'react';
// import './Header.css'; // Make sure this includes your styles
import './App.css'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">Modexa</h1>

        <button className="menu-toggle" onClick={toggleSidebar}>
          {sidebarOpen ? '✖' : '☰'}
        </button>

        <nav className={`nav ${sidebarOpen ? 'open' : ''}`}>
          <a href="#" onClick={closeSidebar}>Home</a>
          <a href="#faq" onClick={closeSidebar}>FAQs</a>
          <a href="#contact" onClick={closeSidebar}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
