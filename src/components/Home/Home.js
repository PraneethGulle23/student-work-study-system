import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Function to handle login button click
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
        <h1>Student Work-Study System</h1>
      </header>

      {/* Navigation Bar */}
      <nav className="home-nav">
        <ul>
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/dashboard">📊 Dashboard</Link></li>
          <li><Link to="/academic-activities">📚 My Academic Activities</Link></li>
          <li><Link to="/project">🗂️ Projects & Assessments</Link></li>
          <li><Link to="/create-project">➕ Create Project</Link></li>
          <li><Link to="/job-opportunities">💼 Job Opportunities</Link></li>
        </ul>
      </nav>

      <section className="image-section">
        <div className="image-container">
          <img className="home-image" src={require('../../images/work-study2.jpeg')} alt="Home Cover" />
          <div className="overlay-text">Welcome to the Student Work-Study System</div>
          <div className="sub-overlay-text">Manage or track work-study opportunities with ease</div>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 Student Work-Study Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
