// src/components/Header/Header.js
import React from 'react';
import './Header.css';  // Add your styles here

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>Student Work-Study Management</h1>
      </div>
      <div className="user-profile">
        <a href="/profile">My Profile</a>
      </div>
    </header>
  );
};

export default Header;
