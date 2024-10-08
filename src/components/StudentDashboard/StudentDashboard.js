import React from 'react';
import { Link } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <p className="user-name">Praneeth</p>
          <p className="user-designation">Student</p>
        </div>
      </header>

      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/dashboard" className="active-link">📊 Dashboard</Link></li>
          <li><Link to="/academic-activities">📚 My Academic Activities</Link></li>
          <li><Link to="/projects">🗂️ Projects & Assessments</Link></li>
          <li><Link to="/create-project">➕ Create Project</Link></li>
          <li><Link to="/job-opportunities">💼 Job Opportunities</Link></li>
        </ul>
      </nav>

      <main className="dashboard-main">
        <section className="dashboard-section preliminary-details">
          <h2>Welcome to Your Student Dashboard</h2>
          <p className="dashboard-welcome">
            Here, you can find information about your work-study opportunities, academic activities, and important deadlines.
          </p>
        </section>

        <section className="dashboard-section">
          <h2>Upcoming Work-Study Opportunities</h2>
          <div className="dashboard-content">
            <div className="dashboard-item">Internship at XYZ Company</div>
            <div className="dashboard-item">Research Assistant Position</div>
            <div className="dashboard-item">Part-Time Tutor</div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Your Recent Activities</h2>
          <div className="dashboard-content">
            <div className="dashboard-item">Completed Project A</div>
            <div className="dashboard-item">Submitted Assignment B</div>
            <div className="dashboard-item">Attended Workshop on C</div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Important Deadlines</h2>
          <div className="dashboard-content">
            <div className="dashboard-item">Project A Due: <span className="deadline-date">Oct 10</span></div>
            <div className="dashboard-item">Midterm Exams: <span className="deadline-date">Oct 15-20</span></div>
            <div className="dashboard-item">Job Application Deadline: <span className="deadline-date">Oct 30</span></div>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Your Progress Overview</h2>
          <div className="dashboard-content progress-overview">
            <div className="dashboard-item">Courses Completed: 5/10</div>
            <div className="dashboard-item">Current GPA: 3.8</div>
            <div className="dashboard-item">Upcoming Credits: 12</div>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2024 Student Work-Study Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StudentDashboard;
