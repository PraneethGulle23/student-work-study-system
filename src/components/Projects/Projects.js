import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    toggleDialog(); // Close dialog after submission
  };

  return (
    <div className="projects-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Projects & Assessments</h1>
        <div className="header-name">Your Name</div> {/* Placeholder for user's name */}
      </header>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul>
          <li><a href="/">🏠 Home</a></li>
          <li><a href="/dashboard">📊 Dashboard</a></li>
          <li><a href="/academic-activities">📚 My Academic Activities</a></li>
          <li><a href="/project" className="active">🗂️ Projects & Assessments</a></li>
          <li><a href="/job-opportunities">💼 Job Opportunities</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <section className="project-overview">
          <h2>Projects Overview</h2>
          <button className="start-project-button" onClick={toggleDialog}>Start Project</button>
          <button className="assessments-button" onClick={toggleDialog}>Assessments</button>
          <div className="project-card">
            <h3>Project Title 1</h3>
            <p>Description: Brief description of the project.</p>
            <p>Status: Ongoing</p>
            <button className="view-button">View Details</button>
            <button className="save-button">Save for Later</button>
          </div>
          <div className="project-card">
            <h3>Project Title 2</h3>
            <p>Description: Brief description of the project.</p>
            <p>Status: Completed</p>
            <button className="view-button">View Details</button>
            <button className="save-button">Save for Later</button>
          </div>
          {/* Add more project cards as needed */}
          <button className="add-project-button" onClick={toggleDialog}>Add Project</button>
        </section>

        {/* Dialog Box for Adding Projects */}
        {isOpen && (
          <div className="dialog-overlay">
            <div className="dialog-box">
              <h2>Add New Project</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Project Title:
                  <input type="text" required />
                </label>
                <label>
                  Description:
                  <textarea required></textarea>
                </label>
                <label>
                  Deadline:
                  <input type="date" required />
                </label>
                <div className="dialog-buttons">
                  <button type="submit" className="submit-button">Submit</button>
                  <button type="button" className="cancel-button" onClick={toggleDialog}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <section className="assessment-section">
          <h2>Assessments</h2>
          <button className="start-assessments-button">Start Assessments</button>
          <div className="assessment-card">
            <h3>Assessment Title 1</h3>
            <p>Due Date: YYYY-MM-DD</p>
            <p>Status: Not Submitted</p>
          </div>
          <div className="assessment-card">
            <h3>Assessment Title 2</h3>
            <p>Due Date: YYYY-MM-DD</p>
            <p>Status: Submitted</p>
          </div>
          {/* Add more assessment cards as needed */}
        </section>

        <section className="organization-projects">
          <h2>Organization Projects</h2>
          <button className="apply-button">Apply</button>
          <button className="save-button">Save</button>
          <button className="delete-button">Delete</button>
          {/* Add more functionalities as needed */}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Student Work-Study System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
