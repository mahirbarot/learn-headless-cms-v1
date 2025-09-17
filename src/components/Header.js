import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>React CMS</h2>
        </div>
        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/admin" className="nav-link admin-link">Admin</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
