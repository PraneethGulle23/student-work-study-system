import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure your CSS file is correctly linked

function NavBar({ selected }) {
  return (
    <nav className="navbar">
      <ul>
        <li className={selected === 'home' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={selected === 'dashboard' ? 'active' : ''}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {/* Add other navigation items here */}
      </ul>
    </nav>
  );
}

export default NavBar;
